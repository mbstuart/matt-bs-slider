import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {
   public calculatePercentMin(minValue, lowerBound, upperBound): string {
    return (100 * (minValue - lowerBound) / (upperBound - lowerBound)).toString() + '%';
  }

  public calculatePercentMax(maxValue, lowerBound, upperBound): string {
    return (100 * (maxValue - lowerBound) / (upperBound - lowerBound)).toString() + '%';
  }

  public calculatePercentRightForBar(maxValue, lowerBound, upperBound): string {
    return (100 * (upperBound - maxValue) / (upperBound - lowerBound)).toString() + '%';
  }
}
