
import { Component, Input, OnInit } from '@angular/core';

// import Swiper JS
declare var Swiper;

export interface GalleryItem {
  name: string,
  description: string,
  buttonText: string,
  action?: Function,
  image: string
};

@Component({
  selector: 'cmpt-gallery-url',
  templateUrl: 'gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryUrlComponent implements OnInit {

  @Input() galleryItems: Array<GalleryItem>;
  public epochNumber: number = Date.now();
  public colorHeader: string = "#000";

  constructor(
  ) { }

  public ngOnInit() {
    setTimeout(() => {
     //console.log(this.galleryItems);
      const swiper = new Swiper(`.swiper-${this.epochNumber}`, {
        spaceBetween: 0,
        slidesPerView: "auto",
        touchRatio: 0.2,
        loop: this.galleryItems.length > 1 ? true : false,
        slideToClickedSlide: true,
        loopedSlides: 50,
        autoplay: true,
        direction: "horizontal",
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        
      });

      setTimeout(() => {
        this.onResize({});
      }, 500);

    }, 1000);
  }

  onResize(evt: any) {
    let id: any = document.getElementById("in");
    let id2: any = document.getElementById("swp");
    id.style.height = "auto";
    id2.style.height = `${id.offsetHeight}px`;
  }
}