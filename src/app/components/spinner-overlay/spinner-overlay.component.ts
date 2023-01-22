import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmpt-app-spinner-overlay',
  templateUrl: 'spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss'],
})
export class SpinnerOverlayComponent implements OnInit {
  @Input() public message: string;
  constructor() {}

  public ngOnInit() {
   //console.log(this.message);
    
  }
}