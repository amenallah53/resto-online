import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTab } from './orders-tab';

describe('OrdersTab', () => {
  let component: OrdersTab;
  let fixture: ComponentFixture<OrdersTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
