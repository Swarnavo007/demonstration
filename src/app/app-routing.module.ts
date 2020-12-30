import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'view-user',component:ViewUserComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModule=[HomeComponent,ViewUserComponent,AddUserComponent]
