import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import {ExistingConditions} from "../submit-case/models/existing-conditions";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {SearchConditions} from "./models/search-conditions";
import {SubmitCaseService} from "../services/submit-case.service";
import {Router} from "@angular/router";
import {CaseModel} from "../submit-case/models/case-model";

@Component({
  selector: 'app-search-case',
  templateUrl: './search-case.component.html',
  styleUrls: ['./search-case.component.css']
})
export class SearchCaseComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({
    age: new FormControl(''),
    icd10ConditionsCtrl: new FormControl('')
  });

  public icd10ConditionsUrl = 'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search';
  public icd10ConditionsUrl1 = 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search';
  public existingConditionsList: ExistingConditions[] = [];
  existingConditionsModel: ExistingConditions;

  public formatter = (x: { name: string }) => x.name;

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

  constructor(public httpClient: HttpClient,
              private submitCaseService: SubmitCaseService,
              private router: Router) {
  }

  ngOnInit(): void {
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

  public search() {
    const searchConditions = new SearchConditions(this.formGroup.controls.age.value, this.existingConditionsList);
    this.submitCaseService.searchConditions = searchConditions;
    this.submitCaseService.searchCase(searchConditions).subscribe(
      (res) => {
        if (res == null) {
          alert('No data found');
        } else {
          this.submitCaseService.foundSearchResults = res;
          this.submitCaseService.ages = this.formGroup.controls.age.value;
          this.submitCaseService.searchCaseAllData(searchConditions).subscribe(
            (res1: CaseModel[]) => {
              this.submitCaseService.searchCaseModel = res1;
              this.router.navigateByUrl('/preliminar-model');
            }
          );
        }
      }
    );
  }
}
