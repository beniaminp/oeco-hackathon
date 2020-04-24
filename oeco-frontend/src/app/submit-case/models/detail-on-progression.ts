import {Drugs} from "./drugs";
import {BloodData} from "./blood-data";

export class DetailOnProgression {
  date: number;
  drugs: Drugs[];
  conditions: string;
  symptoms: string;
  bloodData: BloodData[];
  radCT: string;
  radMRI: string;
  radCXR: string;

  constructor(date: number, drugs: Drugs[], conditions: string, symptoms: string, bloodData: BloodData[], radCT: string, radMRI: string, radCXR: string) {
    this.date = date;
    this.drugs = drugs;
    this.conditions = conditions;
    this.symptoms = symptoms;
    this.bloodData = bloodData;
    this.radCT = radCT;
    this.radMRI = radMRI;
    this.radCXR = radCXR;
  }
}
