

export interface DataPoint {
  value: number;
  year: number;
  month: number;
}

export interface WeatherChartItem {
  name: number;
  series: WeatherChartSeries;
}

export interface WeatherChartSeriesPoint {
  value: number;
  name: number;
}

export interface WeatherChartSeries extends Array<WeatherChartSeriesPoint> {}
export interface WeatherChartMulti extends Array<WeatherChartItem> {}

export interface WeatherChartItems {
  multi: WeatherChartMulti;
}

export interface ChosenDate {
  year: number;
  month: number;
}

