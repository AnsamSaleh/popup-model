import {Directive, ElementRef, HostBinding, HostListener, OnInit, OnDestroy, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClosePage]'
})
export class ClosePageDirective implements OnInit, OnDestroy {
 // @HostBinding ('class.visible') private  isshow: boolean;
 // @HostBinding('scrollTop') private scrollTop : number = 100;

  constructor(private el: ElementRef , private renderer: Renderer2) {
    //this.renderer.setStyle(this.el,'display', 'none');
  }
  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }
  ngOnDestroy() {
    document.body.style.overflow = '';
  }
  @HostListener('click') onClick() {
   // console.log("close");
   // let po=this.el.nativeElement.querySelector('.popup');
   // console.log(this.el.nativeElement);
   // this.renderer.setStyle(this.el,'display', 'none');
    this.el.nativeElement.style.display = 'none';
  //  this.isshow= false;
  }

}
