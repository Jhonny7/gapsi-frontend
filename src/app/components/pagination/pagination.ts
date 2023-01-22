import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'cmpt-pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnDestroy, OnInit{

  constructor(
  ) {
  }

  public ngOnInit():void{
  }

  public ngOnDestroy():void{
    
  }

}
