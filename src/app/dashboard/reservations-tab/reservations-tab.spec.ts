import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsTab } from './reservations-tab';

describe('ReservationsTab', () => {
  let component: ReservationsTab;
  let fixture: ComponentFixture<ReservationsTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
