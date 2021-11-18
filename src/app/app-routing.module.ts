// @ts-ignore

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  /*{
  path:'',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  canActivate: [LoginGuard]
  }*/
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
