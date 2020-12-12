import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'grid-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnChanges {
  @Input() size: string | number = 6;

  constructor() {}
  
  ngOnChanges(changes: SimpleChanges) {
    this.size = changes.size.currentValue != null ? changes.size.currentValue : this.size;
  }

  getSize(): string {
    return this.size.toString();
  }
}
