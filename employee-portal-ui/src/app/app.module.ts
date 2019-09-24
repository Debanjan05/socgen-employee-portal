import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { EmployeeLandingComponent } from './components/employee-landing/employee-landing.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { DataService } from './services/data.service';
import { EmployeeRouteActivatorService } from './services/employee-route-activator.service';
import { EmployeeService } from './services/employee.service';


@NgModule({
  declarations: [
    AppComponent, EmployeeLandingComponent, ViewEmployeeComponent, RegisterEmployeeComponent,
    SidenavComponent, ToolbarComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule,
    MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [EmployeeRouteActivatorService, EmployeeService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
