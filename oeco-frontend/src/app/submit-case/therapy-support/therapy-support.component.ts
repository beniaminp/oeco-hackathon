import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {TherapySupport} from "../models/therapy-support";

@Component({
  selector: 'app-therapy-support',
  templateUrl: './therapy-support.component.html',
  styleUrls: ['./therapy-support.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TherapySupportComponent),
    multi: true
  }]
})
export class TherapySupportComponent implements OnInit, ControlValueAccessor {
  onChange: any = () => {
  };
  public therapySupport: TherapySupport = new TherapySupport();

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

  writeValue(obj: TherapySupport): void {
    this.therapySupport = obj;
  }

}
