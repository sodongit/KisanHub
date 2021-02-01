import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AREAS} from '../../../../core/constants/constants-a';

@Component({
  selector: 'app-area-select',
  templateUrl: './area-select.component.html',
  styleUrls: ['./area-select.component.css']
})
export class AreaSelectComponent implements OnInit {

  selectedArea: string;
  areas: { text: string, value: string }[] = AREAS;

  @Output() area = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  setArea(metric): void {
    this.area.emit(metric);
  }
}
