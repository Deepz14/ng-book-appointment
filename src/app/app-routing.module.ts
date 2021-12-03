import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTimeSlotComponent } from './dashboard-time-slot/dashboard-time-slot.component';
import { BookSlotComponent } from './book-slot/book-slot.component';

const routes: Routes = [
  {path: 'home', component: DashboardTimeSlotComponent},
  {path: 'book-slot', component: BookSlotComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
