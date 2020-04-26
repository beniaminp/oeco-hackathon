import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {ExistingConditions} from './models/existing-conditions';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProgressionDetailsComponent} from './progression-details/progression-details.component';
import {DetailOnProgression} from './models/detail-on-progression';
import {CaseModel} from './models/case-model';
import {SubmitCaseService} from '../services/submit-case.service';
import {Router} from '@angular/router';
import {SymptomsModel} from "./models/symptoms-model";

@Component({
  selector: 'app-submit-case',
  templateUrl: './submit-case.component.html',
  styleUrls: ['./submit-case.component.css']
})
export class SubmitCaseComponent implements OnInit {
  public countryListUrl = 'https://restcountries.eu/rest/v2/all';
  public countryList: any[] = [];

  public icd10ConditionsUrl = 'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search';
  public icd10ConditionsUrl1 = 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search';
  public existingConditionsList: ExistingConditions[] = [];
  existingConditionsModel: ExistingConditions;

  public detailsOnProgressionList: DetailOnProgression[] = [];

  @ViewChild('prevInfection')
  public prevInfection: ElementRef;
  public previousInfections: Date[] = [];

  public formGroup: FormGroup = new FormGroup({
    patientCode: new FormControl(''),
    yearOfBirth: new FormControl(''),
    countryCtrl: new FormControl(''),
    icd10ConditionsCtrl: new FormControl(''),
    firstPositiveDate: new FormControl(''),
    firstTestType: new FormControl(''),
    lastCovidPositiveTest: new FormControl(''),
    prevInfection: new FormControl(''),
    lastTestType: new FormControl(''),
    hospitalAdmission: new FormControl(''),
    hospitalRelease: new FormControl(''),
    outcomeDate: new FormControl(''),
    sex: new FormControl(''),
    outcomeType: new FormControl(''),
    additionalComments: new FormControl(''),
    unusualCase: new FormControl(''),
    hasPatientConsent: new FormControl(''),
    existingTherapyDrugs: new FormControl([]),
    existingSymptoms: new FormControl(new SymptomsModel()),
    icuAdmission: new FormControl(new SymptomsModel()),
    icuRelease: new FormControl(new SymptomsModel()),
  });

  public formatter = (x: { name: string }) => x.name;

  public filterCountries = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? [] : this.countryList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)))

  public filteredicd10Conditions = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(),
      switchMap(term =>
        this.conditionsObs(term).pipe(
          tap(),
          catchError(() => {
            return of([]);
          }))
      ),
      tap()
    );

  public conditionsObs = (term) => {
    return this.httpClient.get(/*this.icd10ConditionsUrl + '?terms=' + (term != null ? term.toLowerCase() : '') + '&df=term_icd9_code,primary_name'*/
      this.icd10ConditionsUrl1 + '?sf=code,name&terms=' + (term != null ? term.toLowerCase() : '')).pipe(
      map(
        tmpResult => {
          const retResult: ExistingConditions[] = [];
          for (const tmpResultElementKey of tmpResult[3]) {
            retResult.push(new ExistingConditions(tmpResultElementKey[0], tmpResultElementKey[1], 0));
          }
          return retResult;
        }
      )
    );
  };

  async ngOnInit() {
    await this.retrieveCountryList();
  }

  constructor(public httpClient: HttpClient,
              private modalService: NgbModal,
              private submitCaseService: SubmitCaseService,
              private router: Router) {
  }


  public async retrieveCountryList() {
    this.countryList = await this.httpClient.get(this.countryListUrl).toPromise() as any[];
  }

  public addPrevInfection() {
    const date = new Date();
    date.setFullYear(this.formGroup.controls.prevInfection.value.year,
      this.formGroup.controls.prevInfection.value.month - 1,
      this.formGroup.controls.prevInfection.value.day);
    this.previousInfections.push(date);
    this.formGroup.controls.prevInfection.setValue('');
  }

  public deletePrevDate(idx: number) {
    this.previousInfections.splice(idx, 1);
  }

  public existingConditionsClicked() {
    this.existingConditionsList.push(this.existingConditionsModel);
    this.existingConditionsModel = null;
  }

  public deleteConditionsClicked(index) {
    this.existingConditionsList.splice(index, 1);
  }

  public stillActiveClicked(element: ExistingConditions, event) {
    this.existingConditionsList[this.existingConditionsList.indexOf(element)].stillActive = event.target.value;
  }

  public openProgressionDetailsComponent() {
    const modalRef = this.modalService.open(ProgressionDetailsComponent, {
      scrollable: true,
      centered: true,
      size: 'xl'
    });
    modalRef.componentInstance.name = 'Add Progression Details';
    modalRef.result.then(
      (res) => {
        if (res.type === 'save') {
          this.detailsOnProgressionList.push(res.detailOnProgression);
        }
      }
    );
  }

  public deleteDetailOnProgression(idx: number) {
    this.detailsOnProgressionList.splice(idx, 1);
  }

  public submitCase() {
    const prevInfectionsNumeric: number[] = this.previousInfections.map(value => value.getTime());
    const caseModel: CaseModel = new CaseModel(
      this.formGroup.controls.patientCode.value,
      this.formGroup.controls.yearOfBirth.value,
      this.formGroup.controls.sex.value,
      this.formGroup.controls.countryCtrl.value.alpha2Code,
      new Date(this.formGroup.controls.firstPositiveDate.value.year, this.formGroup.controls.firstPositiveDate.value.month, this.formGroup.controls.firstPositiveDate.value.day).getTime(),
      this.formGroup.controls.firstTestType.value,
      prevInfectionsNumeric,
      new Date(this.formGroup.controls.lastCovidPositiveTest.value.year, this.formGroup.controls.lastCovidPositiveTest.value.month, this.formGroup.controls.lastCovidPositiveTest.value.day).getTime(),
      this.formGroup.controls.lastTestType.value,
      this.existingConditionsList,
      new Date(this.formGroup.controls.hospitalAdmission.value.year, this.formGroup.controls.hospitalAdmission.value.month, this.formGroup.controls.hospitalAdmission.value.day).getTime(),
      new Date(this.formGroup.controls.hospitalRelease.value.year, this.formGroup.controls.hospitalRelease.value.month, this.formGroup.controls.hospitalRelease.value.day).getTime(),
      new Date(this.formGroup.controls.outcomeDate.value.year, this.formGroup.controls.outcomeDate.value.month, this.formGroup.controls.outcomeDate.value.day).getTime(),
      this.formGroup.controls.outcomeType.value,
      this.detailsOnProgressionList,
      this.formGroup.controls.additionalComments.value,
      this.formGroup.controls.unusualCase.value,
      this.formGroup.controls.hasPatientConsent.value,
      this.formGroup.controls.existingTherapyDrugs.value,
      this.formGroup.controls.existingSymptoms.value,
      new Date(this.formGroup.controls.icuAdmission.value.year, this.formGroup.controls.icuAdmission.value.month, this.formGroup.controls.icuAdmission.value.day).getTime(),
      new Date(this.formGroup.controls.icuRelease.value.year, this.formGroup.controls.icuRelease.value.month, this.formGroup.controls.icuRelease.value.day).getTime(),
    );
    this.submitCaseService.submitCase(caseModel).subscribe(
      (res) => {
        console.error(res);
        this.router.navigateByUrl('/');
      }
    );

  }
}
