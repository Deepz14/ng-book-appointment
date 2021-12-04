import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const intitalState = [
    { id: 1, slot: '9.00 AM', timing: 'Morning', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 2, slot: '9.30 AM', timing: 'Morning', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 3, slot: '10.00 AM', timing: 'Morning', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 4, slot: '10.30 AM', timing: 'Morning', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 5, slot: '11.00 AM', timing: 'Morning', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 6, slot: '11.30 AM', timing: 'Morning', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 7, slot: '12.00 PM', timing: 'Afternoon', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 8, slot: '12.30 PM', timing: 'Afternoon', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 9, slot: '1.00 PM', timing: 'Afternoon', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 10, slot: '1.30 PM', timing: 'Afternoon', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 11, slot: '2.00 PM', timing: 'Afternoon',  is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 12, slot: '2.30 PM', timing: 'Afternoon',  is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 13, slot: '3.00 PM', timing: 'Afternoon',  is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 14, slot: '3.20 PM', timing: 'Afternoon', is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 15, slot: '3.30 PM', timing: 'Afternoon',  is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 16, slot: '3.45 PM', timing: 'Afternoon',  is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 17, slot: '4.00 PM', timing: 'Afternoon',  is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 18, slot: '4.15 PM', timing: 'Afternoon',  is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 19, slot: '4.30 PM', timing: 'Afternoon',  is_booked: false, first_name: '', last_name: '', phn_name: ''},
    { id: 20, slot: '5.00 PM', timing: 'Afternoon',  is_booked: false, first_name: '', last_name: '', phn_name: ''},
]

export interface BookSlotState{
    id: number;
    slot: string;
    timing: string;
    is_booked: boolean;
    first_name: string;
    last_name: string;
    phn_name: string;
}

export interface SlotStoreState{
    bookSlotStore: BookSlotState[];
    selectedSlot: string;
}


@Injectable({
    providedIn: 'root'
})
export class SlotStore extends ComponentStore<SlotStoreState>{
    constructor(){
        super({bookSlotStore: intitalState, selectedSlot: ''});
    }

    readonly slotStoreObs$: Observable<SlotStoreState> = this.select(state => state);

    readonly dispatchSelectedSlot = this.updater((state, slotID: string) => ({
      ...state, selectedSlot: slotID
    }));

    readonly updateSlotList = this.updater((state, bookedList: BookSlotState[]) => ({
      ...state, bookSlotStore: bookedList, selectedSlot: ''
    }));
}
