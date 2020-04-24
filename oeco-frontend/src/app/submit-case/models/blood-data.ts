export class BloodData {
  public glucose: string;
  public pressureSystolic: string;
  public pressureDiastolic: string;

  constructor(glucose: string, pressureSystolic: string, pressureDiastolic: string) {
    this.glucose = glucose;
    this.pressureSystolic = pressureSystolic;
    this.pressureDiastolic = pressureDiastolic;
  }
}
