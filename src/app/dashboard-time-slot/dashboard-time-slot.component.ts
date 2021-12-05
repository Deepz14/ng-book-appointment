import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlotStore, SlotStoreState, BookSlotState } from '../store/slot-store';
import {BehaviorSubject, Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-time-slot',
  templateUrl: './dashboard-time-slot.component.html',
  styleUrls: ['./dashboard-time-slot.component.css'],
})
export class DashboardTimeSlotComponent implements OnInit, OnDestroy {

  slotStoreSubs = new Subscription();
  bookingList = new BehaviorSubject<BookSlotState[]>([]);
  constructor(private slotStore: SlotStore,
              private router: Router) { }

  ngOnInit(): void {
    this.slotStoreSubs = this.slotStore.slotStoreObs$.subscribe((state: SlotStoreState) => {
      // Getting the Slot Store Data
      this.bookingList.next(state.bookSlotStore);
    });
  }

  bookSlot(id: number): void{
    this.router.navigate(['/book-slot']);
    this.slotStore.dispatchSelectedSlot(String(id));
  }

  ngOnDestroy(): void {
    this.slotStoreSubs.unsubscribe();
  }

}
