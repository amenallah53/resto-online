import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsTab } from './foods-tab';

describe('FoodsTab', () => {
  let component: FoodsTab;
  let fixture: ComponentFixture<FoodsTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodsTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
