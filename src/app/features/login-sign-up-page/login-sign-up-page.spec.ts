import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignUpPage } from './login-sign-up-page';

describe('LoginSignUpPage', () => {
  let component: LoginSignUpPage;
  let fixture: ComponentFixture<LoginSignUpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignUpPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
