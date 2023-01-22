import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cmpt-app-spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {

    @Input() message;

    constructor() { }

    ngOnInit() {
    }
}