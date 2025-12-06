import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelection } from './table-selection';

describe('TableSelection', () => {
  let component: TableSelection;
  let fixture: ComponentFixture<TableSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
