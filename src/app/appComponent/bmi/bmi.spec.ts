import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmi } from './bmi';

describe('Bmi', () => {
  let component: Bmi;
  let fixture: ComponentFixture<Bmi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bmi],
    }).compileComponents();

    fixture = TestBed.createComponent(Bmi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate BMI for valid height and weight', () => {
    component.heightCm = 170;
    component.weightKg = 65;

    component.calculateBMI();

    expect(component.bmiValue).toBe(22.5);
    expect(component.category).toBe('Normal');
  });
});
