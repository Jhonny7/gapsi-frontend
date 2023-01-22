import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { LoaderService } from '../../services/loading-service';
//import firebase from 'firebase'

declare var Swiper;
// import Swiper styles
//import 'swiper/swiper-bundle.css';

@Component({
  selector: 'page-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit {
  public menu: any = [
    {
      title: 'Repositorios',
      icon: 'bug_report',
      id: 1,
    },
  ];

  constructor(
    private alertService: AlertService,
    private loadingService: LoaderService,
    public router: Router
  ) {}

  ngOnInit() {}

  guest() {}

  open(menu) {}

  onResize(evt: any) {
    let id: any = document.getElementById("in");
    let id2: any = document.getElementById("swp");
    id.style.height = "auto";
    id2.style.height = `${id.offsetHeight}px`;
  }
}
