import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

interface Image {
  title: string;
  url: string;
}

const IMAGES: Image[] = [
  {'title': 'We are covered', 'url': 'assets/photos/IMG_0.jpg'},
  {'title': 'We are covered', 'url': 'assets/photos/IMG_0_1.jpg'},
  {'title': 'We are covered', 'url': 'assets/photos/IMG_1.jpg'},
  {'title': 'Generation Gap', 'url': 'assets/photos/IMG_2.jpg'},
  {'title': 'Potter Me', 'url': 'assets/photos/IMG_3.jpg'},
  {'title': 'Pre-School Kids', 'url': 'assets/photos/IMG_4.jpg'},
];

// Compoent Decorator
@Component({
  selector: 'app-carousel',
  template: `
    <div class="carousel">
      <ul class="slides" [ngStyle]="slidesStyles">
        <li *ngFor="let image of images" class="parent-img">
          <img src="{{ image.url }}"/>
        </li>
      </ul>
      <button (click)="next()" class="nav nav--next">Next</button>
    </div>
  `,
  styles: [`
    .parent-img {
      position: relative;
      height: 100%;
    }

    .parent-img img {
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      max-height: 100%;
    }

    .carousel {
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    .slides {
      position: relative;
      list-style: none;
      width: 600%; /* Number of panes * 100% */
      height: 100%;
      overflow: hidden; /* Clear floats */
      transition: transform 1s linear;
      margin: 0;
      padding: 0;
    }

    .slides > li {
      position: relative;
      float: left;
      width: 16.66%; /* 100 / number of panes */
    }

    .carousel img {
      display: block;
      width: 100%;
      max-width: 100%;
    }

    .nav--next {
      position: absolute;
      right: 10%;
      bottom: 10%;
    }

    @keyframes carousel {
      0% {
        left: -5%;
      }
      11% {
        left: -5%;
      }
      12.5% {
        left: -105%;
      }
      23.5% {
        left: -105%;
      }
      25% {
        left: -205%;
      }
      36% {
        left: -205%;
      }
      37.5% {
        left: -305%;
      }
      48.5% {
        left: -305%;
      }
      50% {
        left: -405%;
      }
      61% {
        left: -405%;
      }
      62.5% {
        left: -305%;
      }
      73.5% {
        left: -305%;
      }
      75% {
        left: -205%;
      }
      86% {
        left: -205%;
      }
      87.5% {
        left: -105%;
      }
      98.5% {
        left: -105%;
      }
      100% {
        left: -5%;
      }
    }
  `],
})
export class CarouselComponent {
  images = IMAGES;
  qty = 0;
  imgWidth = 0;
  slidePosition = 0;
  slidesTranslation = 0;
  slidesStyles: any;

  constructor() {
    this.qty = this.images.length;
    this.imgWidth = 100 / this.qty;
  }

  next() {
    this.slidePosition++;
    this.slidesTranslation = this.slidePosition * this.imgWidth;
    this.slidesStyles = {
      'transform': `translateX(-${this.slidesTranslation}%)`,
    };
  }
}
