import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sample]'
})
export class StyleDirective {

  constructor(private element:ElementRef) { }
  
  @HostListener('mouseenter')mouseEnterFunc(){
    console.log(this.element.nativeElement);
    
    this.element.nativeElement.style.color='orange';
    this.element.nativeElement.style['font-size']='smaller'
  }
  @HostListener('mouseleave')mouseLeaveFunc(){
    console.log(this.element.nativeElement);
    
    this.element.nativeElement.style.color='';
    this.element.nativeElement.style['font-size']='xx-large'
  }

}
