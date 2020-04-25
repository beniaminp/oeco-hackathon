import {ExistingConditions} from "../../submit-case/models/existing-conditions";

export class SearchConditions {
  public age: number;
  public existingConditions: ExistingConditions[];

  constructor(age: number, existingConditions: ExistingConditions[]) {
    this.age = age;
    this.existingConditions = existingConditions;
  }
}
