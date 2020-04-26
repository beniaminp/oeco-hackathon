import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CaseModel} from "../submit-case/models/case-model";
import {SearchConditions} from "../search-case/models/search-conditions";
import {environment} from "../../environments/environment";
import {SearchConditionsWithDrugs} from "../search-case/models/search-conditions-with-drugs";

@Injectable({
  providedIn: 'root'
})
export class SubmitCaseService {
  private rootUrl = 'http://localhost:9090/v1/api/case-controller/';
  private prodRootUrl = 'http://opencasestudy.eu/v1/api/case-controller/';

  public foundSearchResults: any;
  public ages: any;
  public searchCaseModel: CaseModel[];
  public searchConditions: SearchConditions;

  constructor(public httpClient: HttpClient) {
  }

  public submitCase(caseModel: CaseModel) {
    return this.httpClient.post((environment.production ? this.prodRootUrl : this.rootUrl) + 'submitCase', caseModel);
  }

  public searchCase(searchConditions: SearchConditions) {
    return this.httpClient.post((environment.production ? this.prodRootUrl : this.rootUrl) + 'search-case', searchConditions);
  }

  public searchCaseAllData(searchConditions: SearchConditions) {
    return this.httpClient.post((environment.production ? this.prodRootUrl : this.rootUrl) + 'search-case-all-data', searchConditions);
  }

  public searchCaseWithDrug(searchConditions: SearchConditionsWithDrugs) {
    return this.httpClient.post((environment.production ? this.prodRootUrl : this.rootUrl) + 'search-case-with-drugs', searchConditions);
  }
}
