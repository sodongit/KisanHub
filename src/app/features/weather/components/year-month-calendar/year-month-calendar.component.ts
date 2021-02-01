import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';


// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment, Moment} from 'moment';
import {FormControl} from '@angular/forms';
import {ChosenDate} from '../../../../core/models/weather.model';

const moment = _rollupMoment || _moment;



// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-year-month-calendar',
  templateUrl: './year-month-calendar.component.html',
  styleUrls: ['./year-month-calendar.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    },
  ],
})
export class YearMonthCalendarComponent implements OnInit {

  date = new FormControl(moment());
  @Input() dateText: string;
  @Output() chosenDate = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  chosenYearHandler = (normalizedYear: Moment) => {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler = (normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) => {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();

    const chosenDate: ChosenDate = {
      year: ctrlValue.year(),
      month: ctrlValue.month() + 1
    };
    this.chosenDate.emit(chosenDate);
  }

}
