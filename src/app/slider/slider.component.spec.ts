import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';
import { CalcService } from './calc/calc.service';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderComponent],
      providers: [CalcService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.min = 25;
    component.max = 75;
    component.lowerBound = 0;
    component.upperBound = 100;

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should update slider left handle when min is updated', () => {
    component.min = 10;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.handle-lower-wrapper').style.left).toEqual('10%');
  });

    it('should update slider right handle when min is updated', () => {
    component.max = 85;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.handle-upper-wrapper').style.left).toEqual('85%');
  });
});
