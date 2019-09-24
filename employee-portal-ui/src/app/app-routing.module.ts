import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { EmployeeLandingComponent } from './components/employee-landing/employee-landing.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';


const routes: Routes = [
  {
    path: 'employee', component: EmployeeLandingComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ViewEmployeeComponent },
      { path: 'new', component: RegisterEmployeeComponent },
      { path: '**', redirectTo: 'list' }
    ]
  },
  { path: '**', redirectTo: 'employee', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
