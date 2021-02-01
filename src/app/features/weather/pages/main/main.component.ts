import {Component, OnInit} from '@angular/core';
import {GraphDataService} from '../../../../core/services/graph-data.service';
import {Subject} from 'rxjs';
import {ChosenDate, DataPoint, WeatherChartItems} from '../../../../core/models/weather.model';
import {MONTHS} from '../../../../core/constants/constants-a';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedMetric: string;
  selectedArea: string;
  filterDate: { from: ChosenDate, to: ChosenDate };
  result: DataPoint[];

  chartData: Subject<WeatherChartItems> = new Subject<WeatherChartItems>();
  metric;

  constructor(private graphDataService: GraphDataService) {

  }

  ngOnInit(): void {
  }

  setMetric(metric): void {
    this.selectedMetric = metric;
    this.getData();
  }

  setArea(area): void {
    this.selectedArea = area;
    this.getData();
  }

  getData(): void {
    if (this.selectedMetric !== undefined &&
      this.selectedArea !== undefined) {
      const dataParams = {selectedMetric: this.selectedMetric, selectedArea: this.selectedArea};
      this.graphDataService.resolveItems(dataParams).subscribe((data) => {
        this.result = data;
        this.filterData();
      });

    }
  }

  filterData(): void {
    if (this.result !== undefined && this.filterDate.from !== undefined && this.filterDate.to !== undefined) {
      const yearObj = this.result.reduce((data, {value, month, year}) => {
        const {from, to} = this.filterDate;

        if (year === from.year && year === to.year) {
          if (month >= from.month && month <= to.month) {
            data = [...data, {value, month, year}];
          }
        } else if (year === from.year && month >= from.month) {
          data = [...data, {value, month, year}];
        } else if (year > from.year && year < to.year) {
          data = [...data, {value, month, year}];
        } else if (year === to.year && month <= to.month) {
          data = [...data, {value, month, year}];
        }
        return data;

      }, [])
        .reduce((ac, {value, year, month}: DataPoint) => {
          ac[year] = ac[year] ? ac[year] : {name: year, series: []};
          ac[year].series = [...ac[year].series, {name: MONTHS[month], value}];
          return ac;
        }, {});

      const chartData: WeatherChartItems = {
        multi: Object.keys(yearObj).map((year) => {
          return yearObj[year];
        })
      };

      this.chartData.next(chartData);
    }
  }

  setFromDate(event: ChosenDate): void {
    this.filterDate = Object.assign({}, this.filterDate, {from: event});
    this.filterData();
  }

  setToDate(event: ChosenDate): void {
    this.filterDate = Object.assign({}, this.filterDate, {to: event});
    this.filterData();
  }
}
