import { DataApi } from './../../models/data-api.model';
import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmpt-gapsi-square',
  templateUrl: './gapsi-square.html',
  styleUrls: ['./gapsi-square.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class GapsiInfoComponent implements OnDestroy, OnInit {
  @Input() dataApp: DataApi;
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  constructor() {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {}
}
