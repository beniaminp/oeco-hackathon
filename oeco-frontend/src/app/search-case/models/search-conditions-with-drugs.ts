import {ExistingConditions} from "../../submit-case/models/existing-conditions";

export class SearchConditionsWithDrugs {
  public age: number;
  public existingConditions: ExistingConditions[];
  public drugs: string[];


  constructor(age: number, existingConditions: ExistingConditions[], drugs: string[]) {
    this.age = age;
    this.existingConditions = existingConditions;
    this.drugs = drugs;
  }
}
