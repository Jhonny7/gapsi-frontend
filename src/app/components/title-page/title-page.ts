import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'cmpt-title-page',
  templateUrl: './title-page.html',
  styleUrls: ['./title-page.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class TitlePageComponent implements OnDestroy, OnInit {
  @Input() title: string = '';
  constructor() {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {}
}
