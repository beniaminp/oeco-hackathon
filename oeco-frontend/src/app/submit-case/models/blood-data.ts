export class BloodData {
  public glucose: string;
  public pressureSystolic: string;
  public pressureDiastolic: string;
  public glucoseUnit: number;

  constructor(glucose: string, pressureSystolic: string, pressureDiastolic: string, glucoseUnit: number) {
    this.glucose = glucose;
    this.pressureSystolic = pressureSystolic;
    this.pressureDiastolic = pressureDiastolic;
    this.glucoseUnit = glucoseUnit;
  }
}
