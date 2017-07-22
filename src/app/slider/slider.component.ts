import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  private _max: number;
  private _min: number;


  @Input() public get max() {
    return this._max;
  }

  @Output() maxChanged = new EventEmitter();
  public set max(newValue: number) {
    this._max = newValue;
    this.maxChanged.emit();
  }

  @Input() public get min() {
    return this._min;
  }

  @Output() minChanged = new EventEmitter();
  public set min(newValue: number) {
    this._min = newValue;
    this.minChanged.emit();
  }

  @Input() public lowerBound = 0;

  @Input() public upperBound = 100;

  constructor() { }

  ngOnInit() {
  }

  public calculatePercentMin(minValue): string {
    return (100 * (minValue - this.lowerBound) / (this.upperBound - this.lowerBound)).toString() + '%';
  }

  public calculatePercentMax(maxValue): string {
    return (100 * (maxValue - this.lowerBound) / (this.upperBound - this.lowerBound)).toString() + '%';
  }

  public calculatePercentRightForBar(maxValue): string {
    return (100 * (this.upperBound - maxValue) / (this.upperBound - this.lowerBound)).toString() + '%';
  }

}
