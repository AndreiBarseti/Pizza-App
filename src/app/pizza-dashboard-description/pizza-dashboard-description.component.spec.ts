import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDescriptionComponent } from './pizza-dashboard-description.component';

describe('PizzaDescriptionComponent', () => {
  let component: PizzaDescriptionComponent;
  let fixture: ComponentFixture<PizzaDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
