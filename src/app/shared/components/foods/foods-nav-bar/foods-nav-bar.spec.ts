import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsNavBar } from './foods-nav-bar';

describe('FoodsNavBar', () => {
  let component: FoodsNavBar;
  let fixture: ComponentFixture<FoodsNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodsNavBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsNavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
