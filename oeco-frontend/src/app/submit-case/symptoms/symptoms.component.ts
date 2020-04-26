import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SymptomsModel} from "../models/symptoms-model";

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SymptomsComponent),
    multi: true
  }]
})
export class SymptomsComponent implements OnInit, ControlValueAccessor {
  public symptomsModel = new SymptomsModel();
  onChange: any = () => {
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }

  writeValue(obj: SymptomsModel): void {
    this.symptomsModel = obj;
  }

}
