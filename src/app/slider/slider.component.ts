import { Component, OnInit, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { CalcService } from './calc/calc.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  private globalMouseupListener: Function;
  private globalMousemoveListener: Function;
  private _max: number;
  private _min: number;
  private mouseDownLower: boolean;
  private mouseDownUpper: boolean;
  private initialMinX: number;
  private initialMinValue: number;



  @Input() public get max() {
    return this._max;
  }

  @Output() maxChange = new EventEmitter();
  public set max(newValue: number) {
    this._max = newValue;
    this.maxChange.emit(newValue);
  }

  @Input() public get min() {
    return this._min;
  }

  @Output() minChange = new EventEmitter();
  public set min(newValue: number) {
    this._min = newValue;
    this.minChange.emit(newValue);
  }

  @Input() public lowerBound = 0;

  @Input() public upperBound = 100;

  @Input() public step = 1;


  constructor(public calc: CalcService, private elRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {

  }

  toggleMouseDown(isUpper: boolean, isDown: false, $event?: MouseEvent) {
    if (isUpper) {
      this.mouseDownUpper = isDown;
    } else {
      this.mouseDownLower = isDown;
    }

    if (isDown) {
      this.globalMousemoveListener = this.renderer.listen('document', 'mousemove', this.handleMousemove.bind(this));

      this.globalMouseupListener = this.renderer.listenGlobal('document', 'mouseup', () => {
        this.toggleMouseDown(isUpper, false);
      });
    } else {
      this.globalMouseupListener();
      this.globalMousemoveListener();
    }
    // tslint:disable-next-line:no-console
    console.info((isUpper ? 'upper' : 'lower') + ' handle is now ' + (isDown ? 'down' : 'up'));
  }

  public handleMousemove($event: MouseEvent) {
    if (this.mouseDownLower) {
      this.updateMinValue($event);
    }

    if (this.mouseDownUpper) {
      this.updateMaxValue($event);
    }
  }

  private updateMinValue($event: MouseEvent) {
    const pctDiff = this.getPercentPointAlong($event);
    this.min = this.calc.calculateMinAfterMousemove(this.max, this.lowerBound, this.upperBound, pctDiff, this.step);
  }

  private updateMaxValue($event: MouseEvent) {
    const pctDiff = this.getPercentPointAlong($event);
    this.max = this.calc.calculateMaxAfterMousemove(this.min, this.lowerBound, this.upperBound, pctDiff, this.step);
  }


  private getPercentPointAlong($event: MouseEvent): number {
    const container: HTMLElement = this.elRef.nativeElement.querySelector('.noUi-base');
    const leftx = container.getBoundingClientRect().left;
    const rightx = container.getBoundingClientRect().right;
    return ($event.clientX - leftx) / (rightx - leftx);
  }

}
