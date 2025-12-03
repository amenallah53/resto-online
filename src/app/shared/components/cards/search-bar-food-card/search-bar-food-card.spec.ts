import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarFoodCard } from './search-bar-food-card';

describe('SearchBarFoodCard', () => {
  let component: SearchBarFoodCard;
  let fixture: ComponentFixture<SearchBarFoodCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarFoodCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarFoodCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
