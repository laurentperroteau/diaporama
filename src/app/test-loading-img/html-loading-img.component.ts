import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Http, ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-html-loading-img',
  template: '<img #img src="assets/loader.gif" />'
})
export class HtmlLoadingImgComponent implements OnInit {
  @ViewChild('img') img: ElementRef; // Get image tag name without src
  src = 'assets/loader.gif';
  folder = 'assets/photos/';

  constructor(
    private _http: Http,
    private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Create new image object
    const newImg = new Image;
    const img = this.img;

    // Create callback that set src image of newImage "onload"
    newImg.onload = function() {
      img.nativeElement.src = (this as HTMLImageElement).src;
    };

    // Set image on Object Image, that will set on component image when will be ready
    newImg.src = this.folder + 'IMG_1.jpg';
  }
}
