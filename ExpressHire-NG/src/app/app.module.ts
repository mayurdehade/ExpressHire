import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionformComponent } from './components/questionform/questionform.component';
import { InterviewComponent } from './components/interview/interview.component';
import { SheduleinterviewComponent } from './components/sheduleinterview/sheduleinterview.component';
import { CandidatedetailsComponent } from './components/candidatedetails/candidatedetails.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './components/results/results.component';
import { CheckSystemComponent } from './components/check-system/check-system.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    QuestionformComponent,
    InterviewComponent,
    SheduleinterviewComponent,
    CandidatedetailsComponent,
    NavbarComponent,
    RegisterComponent,
    ResultsComponent,
    CheckSystemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
