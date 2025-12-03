import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsTopSection } from './foods-top-section';

describe('FoodsTopSection', () => {
  let component: FoodsTopSection;
  let fixture: ComponentFixture<FoodsTopSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodsTopSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsTopSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
