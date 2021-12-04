import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlotStore, BookSlotState } from '../store/slot-store';
import {Subscription} from 'rxjs';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})
export class BookSlotComponent implements OnInit, OnDestroy {

  submitted = false;
  slotList: BookSlotState[] = [];
  selectedId = '';
  slotStoreSubs = new Subscription();
  bookSlotForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    phn_name: new FormControl('', [Validators.required])
  });
  constructor(private slotStore: SlotStore,
              private router: Router) { }

  ngOnInit(): void {
    this.slotStoreSubs = this.slotStore.slotStoreObs$.subscribe((state) => {
        if (state.selectedSlot){
          this.slotList = state.bookSlotStore;
          this.selectedId = state.selectedSlot;
          const filterSlot = state.bookSlotStore.filter(slot => slot.id === Number(state.selectedSlot));
          this.bookSlotForm.patchValue({
            first_name: filterSlot[0].first_name,
            last_name: filterSlot[0].last_name,
            phn_name: filterSlot[0].phn_name
          });
        }
    });
  }

  get f(): {[key: string]: AbstractControl}{
    return this.bookSlotForm.controls;
  }

  resetSlotForm(): void{
    this.submitted = false;
    this.bookSlotForm.patchValue({
      first_name: '',
      last_name: '',
      phn_name: ''
    });
  }

  submitData(): void{
    this.submitted = true;
    if (this.bookSlotForm.invalid){
      return;
    }

    const updateList = this.slotList.map((slot) => {
      if (slot.id === Number(this.selectedId)){
        return {...slot, first_name: this.bookSlotForm.get('first_name')?.value, last_name: this.bookSlotForm.get('last_name')?.value,
          phn_name: this.bookSlotForm.get('phn_name')?.value, is_booked: true};
      } else{
        return slot;
      }
    });
    this.router.navigate(['/home']);
    this.slotStore.updateSlotList(updateList);
  }

  ngOnDestroy(): void {
    this.slotStoreSubs.unsubscribe();
  }

}
