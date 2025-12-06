import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesTab } from './tables-tab';

describe('TablesTab', () => {
  let component: TablesTab;
  let fixture: ComponentFixture<TablesTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
