import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionformComponent } from './components/questionform/questionform.component';
import { InterviewComponent } from './components/interview/interview.component';
import { CandidatedetailsComponent } from './components/candidatedetails/candidatedetails.component';
import { SheduleinterviewComponent } from './components/sheduleinterview/sheduleinterview.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultsComponent } from './components/results/results.component';
import { CheckSystemComponent } from './components/check-system/check-system.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'questionform', component: QuestionformComponent },
  { path: 'interview', component: InterviewComponent },
  { path: 'candidate', component: CandidatedetailsComponent },
  { path: 'shedule-interview', component: SheduleinterviewComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'check-system', component: CheckSystemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
