import {Component, forwardRef, OnInit} from '@angular/core';
import {Drugs} from "../models/drugs";
import ukDrugs from '../../../assets/data/drugs_uk.json';
import {Observable} from "rxjs";
import {debounceTime, map} from "rxjs/operators";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-therapy-drugs',
  templateUrl: './therapy-drugs.component.html',
  styleUrls: ['./therapy-drugs.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TherapyDrugsComponent),
    multi: true
  }]
})

export class TherapyDrugsComponent implements OnInit, ControlValueAccessor {
  public drugs: Drugs[] = [];

  public ukDrugs = ukDrugs.drug;
  public drugDoses: any[] = [];

  public drugName: string;
  public formatter = (x) => x;

  public filterDrugNames = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? [] : this.ukDrugs.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));

  onChange: any = () => {
  };

  // ngModels
  public nameDrugs;
  public dosesDrugs;
  public durationOfTherapy;

  constructor() {
  }

  ngOnInit(): void {
  }

  public deleteDrug(idx: number) {
    this.drugs.splice(idx, 1);
  }

  public addDrug() {
    this.drugs.push(new Drugs(this.nameDrugs, this.dosesDrugs, this.durationOfTherapy));

    this.drugName = '';
    this.dosesDrugs = '';
    this.durationOfTherapy = '';
  }

  public drugNameChanged(result) {
    this.drugDoses = ukDrugs.dose[this.ukDrugs.indexOf(result.item)];
    this.drugName = result.item;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }

  writeValue(obj: any): void {
    this.drugs = obj;
  }

}
