import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from './components/chart/chart.component';
import {MainComponent} from './pages/main/main.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { MetricSelectComponent } from './components/metric-select/metric-select.component';
import { AreaSelectComponent } from './components/area-select/area-select.component';
import { YearMonthCalendarComponent } from './components/year-month-calendar/year-month-calendar.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ChartComponent, MainComponent, MetricSelectComponent, AreaSelectComponent, YearMonthCalendarComponent],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [
    MatDatepickerModule,
    MomentDateAdapter
  ]
})
export class WeatherModule {
}
