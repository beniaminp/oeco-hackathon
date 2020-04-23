export class ExistingConditions {
  public icCode: string;
  public name: string;
  public stillActive: boolean;

  constructor(icCode: string, name: string, stillActive: boolean) {
    this.icCode = icCode;
    this.name = name;
    this.stillActive = stillActive;
  }
}
