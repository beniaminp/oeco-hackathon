import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CaseModel} from "../models/case-model";
import {SearchConditions} from "../../search-case/models/search-conditions";

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

  public searchCase(searchConditions: SearchConditions) {
    return this.httpClient.post(this.rootUrl + 'search-case', searchConditions);
  }
}
