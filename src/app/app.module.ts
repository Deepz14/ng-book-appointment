import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardTimeSlotComponent } from './dashboard-time-slot/dashboard-time-slot.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { SlotStore } from './store/slot-store';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardTimeSlotComponent,
    BookSlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SlotStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
