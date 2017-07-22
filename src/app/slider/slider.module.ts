import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { CalcService } from './calc/calc.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SliderComponent],
  exports: [SliderComponent],
  providers: [CalcService]
})
export class SliderModule { }
