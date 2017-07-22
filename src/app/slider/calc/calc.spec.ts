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

  it('should correctly minimum after mouse move', () => {
    const newMin = calc.calculateMinAfterMousemove(50, 0, 100, 0.1, 1);

    expect(newMin).toEqual(10);
  });

  it('should correctly maximum after mouse move', () => {
    const newMax = calc.calculateMaxAfterMousemove(20, 0, 100, 0.85, 1);

    expect(newMax).toEqual(85);
  });

  it('should calculate min and return in line with step', () => {
    const newMin = calc.calculateMinAfterMousemove(50, 0, 100, 0.133, 1);
    expect(newMin).toEqual(13);
  });

  it('should calculate min and return in line with step include 0.5', () => {
    const newMin = calc.calculateMinAfterMousemove(50, 0, 100, 0.135, 1);
    expect(newMin).toEqual(14);
  });

    it('should calculate min and return in line with step include 0.5', () => {
    const newMin = calc.calculateMinAfterMousemove(50, 0, 150, 0.155, 15);
    expect(newMin).toEqual(30);
  });
});
