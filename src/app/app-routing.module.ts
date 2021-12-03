import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTimeSlotComponent } from './dashboard-time-slot/dashboard-time-slot.component';

const routes: Routes = [
  {path: 'home', component: DashboardTimeSlotComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
