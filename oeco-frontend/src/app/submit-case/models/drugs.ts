export class Drugs {
  public name: string;
  public doses: string;
  public times: number;

  constructor(name: string, doses: string, times: number) {
    this.name = name;
    this.doses = doses;
    this.times = times;
  }
}
