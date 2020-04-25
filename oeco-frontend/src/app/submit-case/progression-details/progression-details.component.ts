import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {Drugs} from '../models/drugs';
import {BloodData} from '../models/blood-data';
import {DetailOnProgression} from '../models/detail-on-progression';
import {CtRadiologyModel} from '../models/ct-radiology-model';
import ukDrugs from '../../../assets/data/drugs_uk.json';
import {Observable, of} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import {ExistingConditions} from "../models/existing-conditions";
import {HttpClient} from "@angular/common/http";
import {TherapySupport} from "../models/therapy-support";
import {SymptomsModel} from "../models/symptoms-model";

@Component({
  selector: 'app-progression-details',
  templateUrl: './progression-details.component.html',
  styleUrls: ['./progression-details.component.css']
})
export class ProgressionDetailsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              public httpClient: HttpClient) {
  }

  @Input() name;
  public drugs: Drugs[] = [];

  public ukDrugs = ukDrugs.drug;
  public drugDoses: any[] = [];

  public drugName: string;

  public symptomsList: any[] = [
    {item_id: 1, item_text: 'Headache'}
  ];
  public selectedSymptoms = [];

  public bloodData: BloodData[] = [];

  public icd10ConditionsUrl1 = 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search';
  public existingConditionsList: ExistingConditions[] = [];
  existingConditionsModel: ExistingConditions;


  public filterDrugNames = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? [] : this.ukDrugs.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));

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

  public formGroup: FormGroup = new FormGroup({
    progressionDate: new FormControl(''),
    conditions: new FormControl(''),
    glucose: new FormControl(''),
    pressureSystolic: new FormControl(''),
    pressureDiastolic: new FormControl(''),
    radMRI: new FormControl(''),
    radCXR: new FormControl(''),
    durationOfTherapy: new FormControl(''),
    glucoseUnits: new FormControl(''),
    hazyIncreasedOpacities: new FormControl(''),
    consolidation: new FormControl(''),
    crazyPavingPattern: new FormControl(''),
    thickenedInterlobularSepta: new FormControl(''),
    airBronchogramSign: new FormControl(''),
    bronchiectasis: new FormControl(''),
    pleuralThickening: new FormControl(''),
    pneumothorax: new FormControl(''),
    fibrousStripes: new FormControl(''),
    bilateral: new FormControl(''),
    multilobar: new FormControl(''),
    emphasisOnLowerLobe: new FormControl(''),
    emphasisPeriphery: new FormControl(''),
    emphasisPosterior: new FormControl(''),
    pleuralEffusion: new FormControl(''),
    pericardialEffusion: new FormControl(''),
    lymphadenopathy: new FormControl(''),
    vascularThickening: new FormControl(''),
    drugsList: new FormControl([]),
    therapySupport: new FormControl(new TherapySupport()),
    symptoms: new FormControl(new SymptomsModel()),
  });
  public formatter = (x) => x;
  public formatterConditions = (x) => x.name;

  ngOnInit(): void {
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  public deleteDrug(idx: number) {
    this.drugs.splice(idx, 1);
  }

  public addDrug() {
    this.drugs.push(new Drugs(this.drugName, this.formGroup.controls.timeDrugs.value, this.formGroup.controls.dosesDrugs.value));
    this.drugName = '';
    this.drugDoses = [];
    this.formGroup.reset();
  }

  public drugNameChanged(result) {
    this.drugDoses = ukDrugs.dose[this.ukDrugs.indexOf(result)];
    this.drugName = result;
  }

  public existingConditionsClicked() {
    this.existingConditionsList.push(this.existingConditionsModel);
    this.existingConditionsModel = null;
  }

  public deleteConditionsClicked(index) {
    this.existingConditionsList.splice(index, 1);
  }

  public save() {
    const radCT = new CtRadiologyModel(
      this.formGroup.controls.hazyIncreasedOpacities.value,
      this.formGroup.controls.consolidation.value,
      this.formGroup.controls.crazyPavingPattern.value,
      this.formGroup.controls.thickenedInterlobularSepta.value,
      this.formGroup.controls.airBronchogramSign.value,
      this.formGroup.controls.bronchiectasis.value,
      this.formGroup.controls.pleuralThickening.value,
      this.formGroup.controls.pneumothorax.value,
      this.formGroup.controls.fibrousStripes.value,
      this.formGroup.controls.bilateral.value,
      this.formGroup.controls.multilobar.value,
      this.formGroup.controls.emphasisOnLowerLobe.value,
      this.formGroup.controls.emphasisPeriphery.value,
      this.formGroup.controls.emphasisPosterior.value,
      this.formGroup.controls.pleuralEffusion.value,
      this.formGroup.controls.pericardialEffusion.value,
      this.formGroup.controls.lymphadenopathy.value,
      this.formGroup.controls.vascularThickening.value
    );
    const detailOnProgression = new DetailOnProgression(
      new Date(this.formGroup.controls.progressionDate.value.year, this.formGroup.controls.progressionDate.value.month, this.formGroup.controls.progressionDate.value.day).getTime(),
      this.formGroup.controls.drugsList.value,
      this.existingConditionsList.map(value => value.icCode),
      '',
      new BloodData(this.formGroup.controls.glucose.value, this.formGroup.controls.pressureSystolic.value, this.formGroup.controls.pressureDiastolic.value, this.formGroup.controls.glucoseUnits.value),
      radCT,
      this.formGroup.controls.radMRI.value,
      this.formGroup.controls.radCXR.value,
      this.formGroup.controls.durationOfTherapy.value,
      this.formGroup.controls.therapySupport.value,
      this.formGroup.controls.symptoms.value,
    );
    this.activeModal.close({type: 'save', detailOnProgression});
  }
}
