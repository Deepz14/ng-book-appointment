import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlotStore, SlotStoreState, BookSlotState } from '../store/slot-store';
import {BehaviorSubject, Observer, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-time-slot',
  templateUrl: './dashboard-time-slot.component.html',
  styleUrls: ['./dashboard-time-slot.component.css'],
})
export class DashboardTimeSlotComponent implements OnInit, OnDestroy {

  // @ts-ignore
  slotStoreSubs: Subscription;
  bookingList = new BehaviorSubject<BookSlotState[]>([]);
  constructor(private slotStore: SlotStore) { }

  ngOnInit(): void {
    this.slotStoreSubs = this.slotStore.slotStoreObs$.subscribe((state: SlotStoreState) => {
      // Getting the Slot Store Data
      this.bookingList.next(state.bookSlotStore);
    });
  }

  bookSlot(id: number): void{
    console.log(id);
  }

  ngOnDestroy(): void {
    this.slotStoreSubs.unsubscribe();
  }

}
