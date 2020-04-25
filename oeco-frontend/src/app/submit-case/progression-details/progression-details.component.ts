import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";
import {Drugs} from "../models/drugs";
import {IDropdownSettings} from "ng-multiselect-dropdown/multiselect.model";
import {BloodData} from "../models/blood-data";
import {DetailOnProgression} from "../models/detail-on-progression";
import {CtRadiologyModel} from "../models/ct-radiology-model";
import ukDrugs from '../../../assets/data/drugs_uk.json';

@Component({
  selector: 'app-progression-details',
  templateUrl: './progression-details.component.html',
  styleUrls: ['./progression-details.component.css']
})
export class ProgressionDetailsComponent implements OnInit {
  @Input() name;
  public drugs: Drugs[] = [];

  public ukDrugs = ukDrugs.drug;
  public drugDoses: any[] = [];

  public symptomsList: any[] = [
    {item_id: 1, item_text: 'Headache'}
  ];
  public selectedSymptoms = [];
  public dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 10,
    allowSearchFilter: true
  };

  public bloodData: BloodData[] = [];

  public formGroup: FormGroup = new FormGroup({
    progressionDate: new FormControl(''),
    timeDrugs: new FormControl(''),
    nameDrugs: new FormControl(''),
    dosesDrugs: new FormControl(''),
    conditions: new FormControl(''),
    glucose: new FormControl(''),
    pressureSystolic: new FormControl(''),
    pressureDiastolic: new FormControl(''),
    radMRI: new FormControl(''),
    radCXR: new FormControl(''),
    durationOfTherapy: new FormControl(''),
    oxygenAdded: new FormControl(''),
    oxygenRemoved: new FormControl(''),
    mechanicalVentilationIntubation: new FormControl(''),
    mechanicalVentilationExtubation: new FormControl(''),
    ecmo: new FormControl(''),
    dialysisYes: new FormControl(''),
    dialysisNo: new FormControl(''),
    dialysisPreexisting: new FormControl(''),
    glucoseUnits: new FormControl(''),
    noSymptoms: new FormControl(''),
    temperature: new FormControl(''),
    soreThroat: new FormControl(''),
    dryCough: new FormControl(''),
    fatigue: new FormControl(''),
    nasalCongestion: new FormControl(''),
    lossOfSmell: new FormControl(''),
    lossOfTaste: new FormControl(''),
    fever: new FormControl(''),
    sputumProduction: new FormControl(''),
    shortnessOfBreath: new FormControl(''),
    myalgia: new FormControl(''),
    headaches: new FormControl(''),
    chills: new FormControl(''),
    pleauriticPain: new FormControl(''),
    diarrhea: new FormControl(''),
    dyspnoea: new FormControl(''),
    severeRespiratoryInsufficiency: new FormControl(''),
    dermatologicLesion: new FormControl(''),
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
  });

  constructor(public activeModal: NgbActiveModal) {
  }

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
    this.drugs.push(new Drugs(this.ukDrugs[this.formGroup.controls.nameDrugs.value], this.formGroup.controls.timeDrugs.value, this.formGroup.controls.dosesDrugs.value));
  }

  public drugNameChanged(event) {
    this.drugDoses = ukDrugs.dose[event.target.value];
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
      this.drugs,
      this.formGroup.controls.conditions.value,
      '',
      new BloodData(this.formGroup.controls.glucose.value, this.formGroup.controls.pressureSystolic.value, this.formGroup.controls.pressureDiastolic.value, this.formGroup.controls.glucoseUnits.value),
      radCT,
      this.formGroup.controls.radMRI.value,
      this.formGroup.controls.radCXR.value,
      this.formGroup.controls.durationOfTherapy.value,
      this.formGroup.controls.oxygenAdded.value,
      this.formGroup.controls.oxygenRemoved.value,
      this.formGroup.controls.mechanicalVentilationIntubation.value,
      this.formGroup.controls.mechanicalVentilationExtubation.value,
      this.formGroup.controls.ecmo.value,
      this.formGroup.controls.dialysisYes.value,
      this.formGroup.controls.dialysisNo.value,
      this.formGroup.controls.dialysisPreexisting.value,
      this.formGroup.controls.noSymptoms.value,
      this.formGroup.controls.temperature.value,
      this.formGroup.controls.soreThroat.value,
      this.formGroup.controls.dryCough.value,
      this.formGroup.controls.fatigue.value,
      this.formGroup.controls.nasalCongestion.value,
      this.formGroup.controls.lossOfSmell.value,
      this.formGroup.controls.lossOfTaste.value,
      this.formGroup.controls.fever.value,
      this.formGroup.controls.sputumProduction.value,
      this.formGroup.controls.shortnessOfBreath.value,
      this.formGroup.controls.myalgia.value,
      this.formGroup.controls.headaches.value,
      this.formGroup.controls.chills.value,
      this.formGroup.controls.pleauriticPain.value,
      this.formGroup.controls.diarrhea.value,
      this.formGroup.controls.dyspnoea.value,
      this.formGroup.controls.severeRespiratoryInsufficiency.value,
      this.formGroup.controls.dermatologicLesion.value,
    );
    this.activeModal.close({type: 'save', detailOnProgression});
  }
}
