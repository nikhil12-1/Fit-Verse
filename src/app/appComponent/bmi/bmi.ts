import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  standalone: false,
  templateUrl: './bmi.html',
  styleUrl: './bmi.css',
})
export class Bmi {
  heightCm: number | null = null;
  weightKg: number | null = null;
  bmiValue: number | null = null;
  category = 'Enter details to calculate';

  calculateBMI(): void {
    if (this.heightCm === null || this.weightKg === null) {
      this.bmiValue = null;
      this.category = 'Enter details to calculate';
      return;
    }

    const heightInMeters = this.heightCm / 100;
    if (heightInMeters <= 0 || this.weightKg <= 0) {
      this.bmiValue = null;
      this.category = 'Enter valid values';
      return;
    }

    this.bmiValue = Number((this.weightKg / (heightInMeters * heightInMeters)).toFixed(1));

    if (this.bmiValue < 18.5) {
      this.category = 'Underweight';
    } else if (this.bmiValue < 25) {
      this.category = 'Normal';
    } else if (this.bmiValue < 30) {
      this.category = 'Overweight';
    } else {
      this.category = 'Obese';
    }
  }
}
