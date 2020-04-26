import {Drugs} from "./drugs";
import {BloodData} from "./blood-data";
import {CtRadiologyModel} from "./ct-radiology-model";
import {TherapySupport} from "./therapy-support";
import {SymptomsModel} from "./symptoms-model";

export class DetailOnProgression {
  date: number;
  drugs: Drugs[];
  conditions: string[];
  bloodData: BloodData;
  radCT: CtRadiologyModel;
  radMRI: string;
  radCXR: string;
  durationOfTherapy: number;
  therapySupport: TherapySupport;
  symptoms: SymptomsModel;

  constructor(date: number, drugs: Drugs[], conditions: string[], bloodData: BloodData, radCT: CtRadiologyModel, radMRI: string, radCXR: string, durationOfTherapy: number, therapySupport: TherapySupport, symptoms: SymptomsModel) {
    this.date = date;
    this.drugs = drugs;
    this.conditions = conditions;
    this.bloodData = bloodData;
    this.radCT = radCT;
    this.radMRI = radMRI;
    this.radCXR = radCXR;
    this.durationOfTherapy = durationOfTherapy;
    this.therapySupport = therapySupport;
    this.symptoms = symptoms;
  }
}
