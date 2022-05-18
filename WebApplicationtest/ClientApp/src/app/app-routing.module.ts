import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PrivacyComponent} from "./privacy/privacy.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', data: {title: 'Home page'}},
  {path: 'privacy', component: PrivacyComponent, data: {title: 'Privacy Policy'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
