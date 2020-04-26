import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SubmitCaseComponent} from './submit-case/submit-case.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProgressionDetailsComponent} from './submit-case/progression-details/progression-details.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {CommonModule} from "@angular/common";
import { SearchCaseComponent } from './search-case/search-case.component';
import { PreliminariViewComponent } from './search-case/preliminari-view/preliminari-view.component';
import { TherapyDrugsComponent } from './submit-case/therapy-drugs/therapy-drugs.component';
import { TherapySupportComponent } from './submit-case/therapy-support/therapy-support.component';
import { SymptomsComponent } from './submit-case/symptoms/symptoms.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    SubmitCaseComponent,
    HomeComponent,
    ProgressionDetailsComponent,
    SearchCaseComponent,
    PreliminariViewComponent,
    TherapyDrugsComponent,
    TherapySupportComponent,
    SymptomsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
