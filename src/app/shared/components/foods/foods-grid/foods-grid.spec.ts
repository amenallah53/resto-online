import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsGrid } from './foods-grid';

describe('FoodsGrid', () => {
  let component: FoodsGrid;
  let fixture: ComponentFixture<FoodsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
