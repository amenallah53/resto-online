import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHeroSection } from './reservation-hero-section';

describe('HeroSection', () => {
  let component: ReservationHeroSection;
  let fixture: ComponentFixture<ReservationHeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationHeroSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationHeroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
