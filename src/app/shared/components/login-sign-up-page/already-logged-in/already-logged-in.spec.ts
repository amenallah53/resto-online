import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyLoggedIn } from './already-logged-in';

describe('AlreadyLoggedIn', () => {
  let component: AlreadyLoggedIn;
  let fixture: ComponentFixture<AlreadyLoggedIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlreadyLoggedIn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlreadyLoggedIn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
