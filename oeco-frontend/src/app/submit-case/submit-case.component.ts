import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {ExistingConditions} from "./models/existing-conditions";

@Component({
  selector: 'app-submit-case',
  templateUrl: './submit-case.component.html',
  styleUrls: ['./submit-case.component.css']
})
export class SubmitCaseComponent implements OnInit {
  public countryListUrl = 'https://restcountries.eu/rest/v2/all';
  public countryList: any[] = [];
  public filteredCountries: Observable<any[]>;
  public countryCtrl = new FormControl('');

  public icd10ConditionsUrl = 'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search';
  public filteredicd10Conditions: any[];
  public icd10ConditionsCtrl = new FormControl('');
  public existingConditionsList: ExistingConditions[] = [];

  @ViewChild('prevInfection')
  public prevInfection: ElementRef;
  public previousInfections: Date[] = [];

  public formGroup: FormGroup = new FormGroup({
    country: this.countryCtrl,
    icd10ConditionsCtrl: this.icd10ConditionsCtrl,
    firstPositiveDate: new FormControl(''),
    firstTestType: new FormControl(''),
    lastCovidPositiveTest: new FormControl(''),
    prevInfection: new FormControl(''),
    lastTestType: new FormControl(''),
    hospitalAdmission: new FormControl(''),
    hospitalRelease: new FormControl('')
  });

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.retrieveCountryList();
    this.retriveICD10Conditions();
  }


  public retrieveCountryList() {
    this.httpClient.get(this.countryListUrl).subscribe(
      (res: any[]) => {
        this.countryList = res;
        this.filteredCountries = this.countryCtrl.valueChanges
          .pipe(
            startWith(''),
            map(country => country ? this._filterCountry(country) : this.countryList.slice())
          );
      }
    );
  }

  private _filterCountry(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.countryList.filter(country => country.name.toLowerCase().indexOf(filterValue) === 0);
  }

  public async retriveICD10Conditions() {
    this.icd10ConditionsCtrl.valueChanges.subscribe(
      async (value) => {
        this.filteredicd10Conditions = await this._filterConditions(value);
      }
    );
  }

  private async _filterConditions(value: string) {
    const tmpResult = await this.httpClient.get(this.icd10ConditionsUrl + '?terms=' + (value != null ? value.toLowerCase() : '') + '&df=term_icd9_code,primary_name').toPromise();
    return tmpResult[3];
  }

  public addPrevInfection() {
    this.previousInfections.push(this.formGroup.controls.prevInfection.value);
    this.formGroup.controls.prevInfection.setValue('');
  }

  public deletePrevDate(idx: number) {
    this.previousInfections.splice(idx, 1);
  }

  public existingConditionsClicked(conditions: any) {
    this.existingConditionsList.push(new ExistingConditions(conditions[0], conditions[1], false));
    this.icd10ConditionsCtrl.setValue('');
  }

  public deleteConditionsClicked(index) {
     this.existingConditionsList.splice(index, 1);
  }

  public stillActiveClicked(element: ExistingConditions) {
    this.existingConditionsList[this.existingConditionsList.indexOf(element)].stillActive = !element.stillActive;
  }
}
