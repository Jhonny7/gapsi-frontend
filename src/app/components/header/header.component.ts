import { environment } from '../../../environment/environment.prod';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderItem } from '../../models/header-item.model';

/**Componente header de la aplicación */
@Component({
  selector: 'cmpt-header-ux',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderUxComponent implements OnInit {
  public publicItems: HeaderItem[] = [];
  public first: boolean = false;
  public version: String = environment.version;
  public element: any = null;

  constructor(private router: Router) {}

  /**Inicializa items de header público */
  public ngOnInit() {
    this.publicItems = HeaderItem.staticPublicList();
  }

  //side menu personal
  public openNav() {
    let menu: any = document.getElementById('mySidenav');
    console.log(menu);

    let ftr: any = document.getElementById('ftr-menu-id');
    menu.style.left = '0';
    ftr.style.left = '0';
    this.element = document.getElementById('body-gapsi');

    if (this.element) {
      this.element.removeEventListener('click', this.fcn, true);
      this.element.addEventListener('click', this.fcn);
    }
  }

  public closeNav(): void {
    console.log('closenav');

    const menu: any = document.getElementById('mySidenav');

    const ftr: any = document.getElementById('ftr-menu-id');
    const bodyLetech: any = document.getElementById('body-gapsi');
    //menu.style.width = '0';
    //ftr.style.width = '0';
    ftr.style.left = '-280px';
    menu.style.left = '-280px';
    bodyLetech.style.overflow = 'scroll';
    this.first = false;
  }

  public reload() {
    window.location.reload();
  }

  public goGit() {
    window.open('https://github.com/Jhonny7?tab=repositories', '_blank');
  }

  public fcn = (evt: any) => {
    const menu: any = document.getElementById('mySidenav');
    let targetElement: any = evt.target;
    console.log(menu.style.left);

    if (menu.style.left == '0px') {
      do {
        if (targetElement === menu) {
          return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);
      if (!this.first) {
        this.first = true;
      } else {
        this.closeNav();
      }
    }
  }
}
