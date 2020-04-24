import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";
import {Drugs} from "../models/drugs";
import {IDropdownSettings} from "ng-multiselect-dropdown/multiselect.model";
import {BloodData} from "../models/blood-data";
import {DetailOnProgression} from "../models/detail-on-progression";

@Component({
  selector: 'app-progression-details',
  templateUrl: './progression-details.component.html',
  styleUrls: ['./progression-details.component.css']
})
export class ProgressionDetailsComponent implements OnInit {
  @Input() name;
  public drugs: Drugs[] = [];

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
    radCT: new FormControl(''),
    radMRI: new FormControl(''),
    radCXR: new FormControl(''),
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
    this.drugs.push(new Drugs(this.formGroup.controls.nameDrugs.value, this.formGroup.controls.timeDrugs.value, this.formGroup.controls.dosesDrugs.value));
  }

  public addBloodData() {
    this.bloodData.push(new BloodData(this.formGroup.controls.glucose.value, this.formGroup.controls.pressureSystolic.value, this.formGroup.controls.pressureDiastolic.value));
  }

  public deleteBloodData(idx: number) {
    this.bloodData.splice(idx, 1);
  }

  public save() {
    const detailOnProgression = new DetailOnProgression(
      new Date(this.formGroup.controls.progressionDate.value.year, this.formGroup.controls.progressionDate.value.month, this.formGroup.controls.progressionDate.value.day).getTime(),
      this.drugs,
      this.formGroup.controls.conditions.value,
      '',
      this.bloodData,
      this.formGroup.controls.radCT.value,
      this.formGroup.controls.radMRI.value,
      this.formGroup.controls.radCXR.value,
    );
    this.activeModal.close({type: 'save', detailOnProgression});
  }
}
