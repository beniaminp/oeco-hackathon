import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SubmitCaseService} from '../../services/submit-case.service';
import {Drugs} from '../../submit-case/models/drugs';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {SearchConditionsWithDrugs} from '../models/search-conditions-with-drugs';

@Component({
  selector: 'app-preliminari-view',
  templateUrl: './preliminari-view.component.html',
  styleUrls: ['./preliminari-view.component.css']
})
export class PreliminariViewComponent implements OnInit {
  public searchResults = [];
  public drugs: Drugs[] = [];
  public noData = true;
  public isFirstPage = true;

  public casesAge = '';
  public existingConditions = '';

  public retData: any;
  public treatmentObject;
  public treatmentsListKeys: string[];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];
  public selectedDrug: string;

  public searchByDrugTratments;
  public tratDrguObject: any;

  public commonComplicationsObject: any;
  public commonComplicationsKeys: any[];
  public showChart = true;

  public meanHospitalStay = '0';
  public meanICUStay = '0';

  constructor(
    private submitCaseService: SubmitCaseService,
    public cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.searchResults = this.submitCaseService.foundSearchResults;
    this.submitCaseService.foundSearchResults = [];
    const uniquCondSet = new Set();
    const uniqueAges = new Set();
    this.submitCaseService.searchCaseModel.forEach(value => {
      value.existingConditions.forEach(value1 => uniquCondSet.add(value1.icCode));
      uniqueAges.add(new Date().getFullYear() - value.yearOfBirth);
    });
    uniquCondSet.forEach(value => this.existingConditions += value + ' ');

    if (uniqueAges.size > 1) {
      const orderdAges = [...uniqueAges].sort((one, two) => (one < two ? -1 : 1));
      this.casesAge = orderdAges[0] + ' - ' + orderdAges[orderdAges.length - 1];
    } else {
      this.casesAge = uniqueAges[0];
    }

    this.retData = this.searchResults;

    this.treatmentObject = this.retData.Treatmant_List;
    this.treatmentsListKeys = Object.keys(this.treatmentObject);

    this.initMeans(this.retData);
    this.initComplications(this.retData);
    this.initCharts(this.retData);


    this.noData = this.searchResults.length === 0;
    if (!this.noData) {
      this.init();
    }
  }

  public init() {
  }

  public goToTreatment(treatment: any) {
    this.isFirstPage = false;
    const searchConditionsWithDrugs =
      new SearchConditionsWithDrugs(
        this.submitCaseService.searchConditions.age,
        this.submitCaseService.searchConditions.existingConditions,
        [treatment]);

    this.submitCaseService.searchCaseWithDrug(searchConditionsWithDrugs).subscribe(
      (res1: any) => {
        this.selectedDrug = treatment;
        this.tratDrguObject = res1.Treatmant_List;
        this.searchByDrugTratments = Object.keys(this.tratDrguObject).filter(value => value.toLowerCase().includes(this.selectedDrug.toLowerCase()));
        this.initCharts(res1);
        this.initComplications(res1);
        this.initMeans(res1);
      }
    );
  }

  public goBackToFirstPage() {
    this.isFirstPage = true;
    this.initCharts(this.retData);
    this.initComplications(this.retData);
    this.initMeans(this.retData);
  }

  private initMeans(retData) {
    this.meanHospitalStay = Number(retData.Hospitalization.Mean_Hospital_Stay).toFixed(1);
    this.meanICUStay = Number(retData.ICU.Mean_ICU_Stay).toFixed(1);
  }

  private initCharts(retData) {
    this.cdr.detach();
    this.showChart = false;
    this.cdr.detectChanges();
    this.barChartLabels = [];
    for (let i = 1; i <= retData.Hospitalization.Hospital_Stays_DURATIONS.length; ++i) {
      this.barChartLabels.push(i + '');
    }
    this.barChartData[0] = {data: retData.Hospitalization.Hospital_Stays_DURATIONS, label: 'Hospital time'};
    this.barChartData[1] = {data: retData.ICU.ICU_Stays_DURATIONS, label: 'ICU time'};
    this.showChart = true;
    this.cdr.detectChanges();
    this.cdr.reattach();
  }

  private initComplications(retData) {
    this.commonComplicationsObject = retData.Complication_List;
    this.commonComplicationsKeys = Object.keys(this.commonComplicationsObject);
    console.error(this.commonComplicationsObject[this.commonComplicationsKeys[0]]);
    console.error(this.commonComplicationsKeys);
  }
}
