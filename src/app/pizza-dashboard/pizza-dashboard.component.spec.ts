import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDashboardComponent} from './pizza-dashboard.component'

describe('FirstPageComponent', () => {
  let component: PizzaDashboardComponent;
  let fixture: ComponentFixture<PizzaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
