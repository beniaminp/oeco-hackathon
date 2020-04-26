import {Component, OnInit} from '@angular/core';
import {SubmitCaseService} from '../../services/submit-case.service';
import {Drugs} from '../../submit-case/models/drugs';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {SearchConditionsWithDrugs} from "../models/search-conditions-with-drugs";

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

  constructor(
    private submitCaseService: SubmitCaseService) {
  }

  ngOnInit(): void {
    this.searchResults = this.submitCaseService.foundSearchResults;
    this.submitCaseService.foundSearchResults = [];
    const tmpExistingConditions = [];
    this.submitCaseService.searchCaseModel.forEach(value => {
      tmpExistingConditions.push(value.existingConditions.map(value1 => value1.icCode));
    });
    this.casesAge = (this.submitCaseService.ages - 3) + ' - ' + (this.submitCaseService.ages + 3);
    this.retData = this.searchResults;
    const uniqueCond = [...new Set(tmpExistingConditions)];
    // this.existingConditions += value1.icCode + ' '
    uniqueCond.forEach(value => this.existingConditions += value + ' ');

    this.treatmentObject = this.retData.Treatmant_List;
    this.treatmentsListKeys = Object.keys(this.treatmentObject);

    this.barChartData[0] = {data: this.retData.Hospitalization.Hospital_Stays_DURATIONS, label: 'Hospital time'};
    this.barChartData[1] = {data: this.retData.ICU.ICU_Stays_DURATIONS, label: 'ICU time'};


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
      }
    );
  }
}
