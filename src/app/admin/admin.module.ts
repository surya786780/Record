import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminworksComponent } from './adminworks/adminworks.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AddStaffComponent} from './adminworks/addstaff.component';
import {AddStuComponent} from './adminworks/addstu.component';
import {StuListComponent} from './adminworks/stulist.component';
import { StaffListComponent } from './adminworks/stafflist.component';

@NgModule({
  declarations: [
    AdminworksComponent,
    AddStaffComponent,
    AddStuComponent,
    StuListComponent,
    StaffListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
  ]
})
export class AdminModule {
  static forRoot(routes: Routes) {
    throw new Error('Method not implemented.');
  }
}
