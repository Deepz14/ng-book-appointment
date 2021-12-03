import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTimeSlotComponent } from './dashboard-time-slot.component';

describe('DashboardTimeSlotComponent', () => {
  let component: DashboardTimeSlotComponent;
  let fixture: ComponentFixture<DashboardTimeSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTimeSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
