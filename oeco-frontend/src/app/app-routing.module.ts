import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubmitCaseComponent} from './submit-case/submit-case.component';
import {HomeComponent} from './home/home.component';
import {SearchCaseComponent} from "./search-case/search-case.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'submit-case', component: SubmitCaseComponent},
  {path: 'search-case', component: SearchCaseComponent},
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
