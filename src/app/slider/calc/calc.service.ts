import { Injectable } from '@angular/core';
import * as _ from 'lodash';

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

  public calculateMinAfterMousemove(maxValue: number, lowerBound: number, upperBound: number, percentAlong: number, step: number): number {
    return _.round(Math.min(maxValue, Math.max(lowerBound, (percentAlong * (upperBound - lowerBound)) + lowerBound)) / step, 0) * step;
  }

  public calculateMaxAfterMousemove(minValue, lowerBound, upperBound, percentAlong, step: number): number {
    return _.round(Math.max(minValue, Math.min(upperBound, (percentAlong * (upperBound - lowerBound)) + lowerBound)) / step, 0) * step;
  }
}
