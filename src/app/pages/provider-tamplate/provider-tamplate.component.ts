import { Subscription } from 'rxjs';
import { AddProviderComponent } from './add/add';
import { ProviderModel } from './../../models/provider.model';
import { GenericService } from './../../services/generic.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { LoaderService } from '../../services/loading-service';
import { environment } from 'src/environment/environment.prod';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
//import firebase from 'firebase'

declare var Swiper;
// import Swiper styles
//import 'swiper/swiper-bundle.css';

@Component({
  selector: 'page-provider-tamplate',
  templateUrl: './provider-tamplate.component.html',
  styleUrls: ['./provider-tamplate.component.scss'],
})
export class ProviderTemplateComponent implements OnInit {
  public providers: ProviderModel[];
  public paginableData: any = {
    numberOfElements: 5,
    pageNumber: 0,
    pageSize: 0,
    totalPages: 0,
    totalElements: 0,
    size: 5,
  };

  pageEvent: PageEvent;

  public actualSize: number = 5;

  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [3, 5, 10];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  public customPagination: any = {
    prev: [],
    actual: 0,
    next: [],
  };

  constructor(
    private alertService: AlertService,
    private loadingService: LoaderService,
    private genericService: GenericService,
    public dialogService: MatDialog,
    public router: Router
  ) {}

  ngOnInit() {
    this.loadingService.show();
    this.getProviders();
  }

  resetValues() {
    this.length = 50;
    this.pageSize = 5;
    this.pageIndex = 0;
    this.hidePageSize = false;
    this.showPageSizeOptions = true;
    this.showFirstLastButtons = true;
    this.disabled = false;
    this.customPagination = {
      prev: [],
      actual: 0,
      next: [],
    };
    this.providers = [];
    this.paginableData = {
      numberOfElements: 5,
      pageNumber: 0,
      pageSize: 0,
      totalPages: 0,
      totalElements: 0,
      size: 5,
    };
    this.loadingService.show();
    this.getProviders();
  }

  getProviders() {
    let params = new HttpParams();
    params = params.set('size', this.pageSize);
    params = params.set('page', this.customPagination.actual);
    this.genericService
      .sendGetParams(environment.getAllPaginable, params)
      .subscribe(
        (response: any) => {
          this.providers = response.providers;
          console.log(response);
          this.paginableData.numberOfElements = response.numberOfElements;
          this.paginableData.pageNumber = response.pageNumber;
          this.paginableData.pageSize = response.pageSize;
          this.paginableData.totalPages = response.totalPages;
          this.paginableData.totalElements = response.totalElements;
          this.length = response.totalElements;
          this.paginableData.size = response.size;
          //this.initPaginator();
          //this.customPagination.actual++;
          this.loadingService.hide();
        },
        (error: HttpErrorResponse) => {
          console.log(error);

          this.loadingService.hide();
        }
      );
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.paginableData.totalPages = e.length;
    this.paginableData.pageSize = e.pageSize;
    this.customPagination.actual = e.pageIndex;

    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.getProviders();
  }

  addProvider(provider: any = {}) {
    console.log(provider);

    const dialogRef = this.dialogService.open(AddProviderComponent, {
      data: {...provider},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('created here');
        console.log(result);
        if(result.id){
          this.update(result);
        }else{
          this.create(result);
        }
      }
    });
  }

  create(result: any) {
    this.loadingService.show();

    let request: any = {
      name: result.name,
      last_name: result.lastName,
      business_name: result.businessName,
      address: result.address,
    };

    this.genericService.sendPostRequest(environment.create, request).subscribe(
      (response: any) => {
        this.loadingService.hide();
        this.alertService.successAlert(
          'Bien!',
          `El proveedor generado con éxito`
        );
        setTimeout(() => {
          this.resetValues();
        }, 800);
      },
      (error: HttpErrorResponse) => {
        this.loadingService.hide();
        this.alertService.errorAlert(
          'Oops!',
          `El proveedor no pudo ser generado`
        );
      }
    );
  }

  update(result: any) {
    this.loadingService.show();

    let request: any = {
      name: result.name,
      last_name: result.lastName,
      business_name: result.businessName,
      address: result.address,
      id: result.id
    };

    this.genericService.sendPutRequest(environment.update, request).subscribe(
      (response: any) => {
        this.loadingService.hide();
        this.alertService.successAlert(
          'Bien!',
          `El proveedor actualizado con éxito`
        );
        setTimeout(() => {
          this.resetValues();
        }, 800);
      },
      (error: HttpErrorResponse) => {
        this.loadingService.hide();
        this.alertService.errorAlert(
          'Oops!',
          `El proveedor no pudo ser actualizado`
        );
      }
    );
  }

  confirmDelete(provider:any){
    this.alertService.confirmTrashAlert(()=>{
      this.delete(provider);
    },"Confirmación", "¿Estás seguro de querer eliminar el registro?", "Eliminar");
  }

  delete(provider:any){
    this.loadingService.show();
    this.genericService.sendDelete(`${environment.delete}${provider.id}`).subscribe(
      (response: any) => {
        this.loadingService.hide();
        this.alertService.successAlert(
          'Bien!',
          `El proveedor se ha eliminado correctamente`
        );
        setTimeout(() => {
          this.resetValues();
        }, 800);
      },
      (error: HttpErrorResponse) => {
        this.loadingService.hide();
        this.alertService.errorAlert(
          'Oops!',
          `El proveedor no pudo ser actualizado`
        );
      }
    ); 
  }
}
