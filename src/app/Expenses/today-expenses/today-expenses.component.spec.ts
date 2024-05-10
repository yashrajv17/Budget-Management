import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayExpensesComponent } from './today-expenses.component';

describe('TodayExpensesComponent', () => {
  let component: TodayExpensesComponent;
  let fixture: ComponentFixture<TodayExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
