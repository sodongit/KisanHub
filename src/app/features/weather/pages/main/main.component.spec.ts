import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MainComponent} from './main.component';
import {WeatherChartItems} from '../../../../core/models/weather.model';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MainComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('', () => {
    component.result = [
      {
        value: 82.9,
        year: 1910,
        month: 1
      },
      {
        value: 98.5,
        year: 1910,
        month: 2
      }];

    const test = {
      multi: [{
        name: 1910,
        series: [
          {
            name: 1,
            value: 82.9
          },
          {
            name: 2,
            value: 98.5
          }
        ]
      }]
    };
    component.filterDate = {from: {year: 1910, month: 1}, to: {year: 1910, month: 2}};
    const testa = component.filterData();
    console.log(testa);

  });
});
