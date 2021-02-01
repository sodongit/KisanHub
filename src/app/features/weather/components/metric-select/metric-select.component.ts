import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {METRICS} from '../../../../core/constants/constants-a';

@Component({
  selector: 'app-metric-select',
  templateUrl: './metric-select.component.html',
  styleUrls: ['./metric-select.component.css']
})
export class MetricSelectComponent implements OnInit {

  selectedMetric: string;
  metrics: { text: string, value: string }[] = METRICS;

  @Output() metric = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  setMetric(metric): void {
    this.metric.emit(metric);
  }


}
