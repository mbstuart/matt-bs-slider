import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcService } from './calc.service';


describe('Calc', () => {

  let calc: CalcService = null;

  beforeEach(() => {
    calc = new CalcService();

  });

  it('should be created', () => {
    expect(calc).toBeTruthy();
  });

  it('should correctly calculate percentage left', () => {
    const leftString = calc.calculatePercentMin(25, 0, 100);

    expect(leftString).toEqual('25%');
  });
});
