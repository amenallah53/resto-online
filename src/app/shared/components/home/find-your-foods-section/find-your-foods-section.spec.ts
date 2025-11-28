import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourFoodsSection } from './find-your-foods-section';

describe('FindYourFoodsSection', () => {
  let component: FindYourFoodsSection;
  let fixture: ComponentFixture<FindYourFoodsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindYourFoodsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindYourFoodsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
