export class ExistingConditions {
  public icCode: string;
  public name: string;
  public stillActive: number;

  constructor(icCode: string, name: string, stillActive: number) {
    this.icCode = icCode;
    this.name = name;
    this.stillActive = stillActive;
  }
}
