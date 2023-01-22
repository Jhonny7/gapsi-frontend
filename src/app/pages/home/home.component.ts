import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environment/environment.prod';
import { DataApi } from './../../models/data-api.model';
import { GenericService } from './../../services/generic.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { LoaderService } from '../../services/loading-service';
//import firebase from 'firebase'

declare var Swiper;
// import Swiper styles
//import 'swiper/swiper-bundle.css';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public dataApi: DataApi;
  public showInfo:boolean = true;
  

  constructor(
    private alertService: AlertService,
    private loadingService: LoaderService,
    private genericService: GenericService,
    public router: Router,
  ) {
  }

  ngOnInit() {
   this.getDataAPi();
  }

  getDataAPi(){
    this.loadingService.show();
    this.genericService.sendGetRequest(environment.getDataAPI).subscribe((response:any)=>{
      this.dataApi = response;
      console.log(this.dataApi);
      this.loadingService.hide();
    },(error: HttpErrorResponse)=>{
      console.log(error);
      
      this.loadingService.hide();
    });
  }

  close(evt:any){
    this.showInfo = false;
    this.router.navigate(["/gapsi/providers"]);
  }
  
}
