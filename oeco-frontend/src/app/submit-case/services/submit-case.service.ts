import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CaseModel} from "../models/case-model";

@Injectable({
  providedIn: 'root'
})
export class SubmitCaseService {
  private rootUrl = 'http://localhost:9090/v1/api/case-controller/';

  constructor(public httpClient: HttpClient) {
  }

  public submitCase(caseModel: CaseModel) {
    return this.httpClient.post(this.rootUrl + 'submitCase', caseModel);
  }
}
