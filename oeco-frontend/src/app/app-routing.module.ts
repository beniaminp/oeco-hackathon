import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubmitCaseComponent} from './submit-case/submit-case.component';
import {HomeComponent} from './home/home.component';
import {SearchCaseComponent} from "./search-case/search-case.component";
import {PreliminariViewComponent} from "./search-case/preliminari-view/preliminari-view.component";
import {BifDataComponent} from "./bif-data/bif-data.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'submit-case', component: SubmitCaseComponent},
  {path: 'search-case', component: SearchCaseComponent},
  {path: 'preliminar-model', component: PreliminariViewComponent},
  {path: 'big-data', component: BifDataComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: '', component: SignUpComponent},
  {path: '**', component: SignUpComponent},
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
