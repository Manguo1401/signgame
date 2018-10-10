import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'my-account',
  component: AccountComponent
}];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
],
exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
