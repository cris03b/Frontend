import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/components/login/login.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { FeedbackPageComponent } from './pages/components/feedback-page/feedback-page.component';
import { FeedbackListComponent } from './pages/components/feedback-list/feedback-list.component';
import { RequestFeedbackComponent } from './pages/components/request-feedback/request-feedback.component';
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedbackPageComponent,
    FeedbackListComponent,
    RequestFeedbackComponent
  ],
  imports: [
    BrowserModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
