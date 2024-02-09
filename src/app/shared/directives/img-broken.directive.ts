import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})

export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    elNative.src = 'https://thumbs.dreamstime.com/b/angular-logo-editorial-illustrative-white-background-angular-logo-editorial-illustrative-white-background-eps-download-208329119.jpg'
  }

  constructor(private elHost: ElementRef) { }

}