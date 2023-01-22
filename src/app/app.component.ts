import { LoaderService } from './services/loading-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gapsiApp';

  constructor(
    private loadingService: LoaderService
  ){
    //this.loadingService.show();//test for check loader
  }
}
