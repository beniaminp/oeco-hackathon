import {ExistingConditions} from "./existing-conditions";
import {DetailOnProgression} from "./detail-on-progression";

export class CaseModel {
  patientCode: string;
  yearOfBirth: number;
  sex: number;
  state: string;
  firstPositiveDate: number;
  firstTestType: string;
  previousInfections: number[];
  lastCovidPositiveTest: number;
  lastTestType: string;
  existingConditions: ExistingConditions[];
  hospitalAdmission: number;
  hospitalRelease: number;
  outcomeDate: number;
  outcomeType: number;
  detailsOnProgression: DetailOnProgression[];
  additionalComments: string;
  unusualCase: string;


  constructor(patientCode: string, yearOfBirth: number, sex: number, state: string, firstPositiveDate: number, firstTestType: string, previousInfections: number[], lastCovidPositiveTest: number, lastTestType: string, existingConditions: ExistingConditions[], hospitalAdmission: number, hospitalRelease: number, outcomeDate: number, outcomeType: number, detailsOnProgression: DetailOnProgression[], additionalComments: string, unusualCase: string) {
    this.patientCode = patientCode;
    this.yearOfBirth = yearOfBirth;
    this.sex = sex;
    this.state = state;
    this.firstPositiveDate = firstPositiveDate;
    this.firstTestType = firstTestType;
    this.previousInfections = previousInfections;
    this.lastCovidPositiveTest = lastCovidPositiveTest;
    this.lastTestType = lastTestType;
    this.existingConditions = existingConditions;
    this.hospitalAdmission = hospitalAdmission;
    this.hospitalRelease = hospitalRelease;
    this.outcomeDate = outcomeDate;
    this.outcomeType = outcomeType;
    this.detailsOnProgression = detailsOnProgression;
    this.additionalComments = additionalComments;
    this.unusualCase = unusualCase;
  }
}
