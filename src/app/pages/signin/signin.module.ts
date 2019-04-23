import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const route: Routes = [
  {path: 'signin', component: SigninComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SigninModule { }
