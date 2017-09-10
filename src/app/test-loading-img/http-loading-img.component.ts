import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Http, ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-http-loading-img',
  template: '<img alt="foo" [src]="src"/>'
})
export class HttpLoadingImgComponent implements OnInit {
  src: SafeUrl = 'assets/loader.gif';
  folder = 'assets/photos/';

  constructor(
    private _http: Http,
    private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.generateImage();
    this.getJson();
  }

  generateImage(data?: any): void {
    this._http.get(this.folder + 'IMG_1.jpg', { responseType: ResponseContentType.Blob })
      .subscribe(response => {
        const urlCreator = window.URL;
        this.src = this._sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(response.blob()));
      });
  }

  getJson(): void {
    this._http.get('assets/test.json')
      .subscribe(response => {
        console.log(response.json());
      });
  }
}
