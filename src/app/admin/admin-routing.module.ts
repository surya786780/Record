import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminworksComponent } from './adminworks/adminworks.component';
import {AddStaffComponent} from './adminworks/addstaff.component'
import { StaffListComponent } from './adminworks/stafflist.component';
import { AddStuComponent } from './adminworks/addstu.component';
import { StuListComponent } from './adminworks/stulist.component';

const routes: Routes = [
    {path:'addstaff',component: AddStaffComponent},
    {path:'stafflist',component: StaffListComponent},
    {path:'addstu',component: AddStuComponent}, 
    {path:'stulist',component: StuListComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
