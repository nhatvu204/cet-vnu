import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private ele: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseHover(){
    this.renderer.setStyle(this.ele.nativeElement, 'transform', 'scale(1.1)');
    this.renderer.setStyle(this.ele.nativeElement, 'transition', '0.3s');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.ele.nativeElement, 'transform', 'scale(1)');
    this.renderer.setStyle(this.ele.nativeElement, 'transition', '0.3s');
  }
}
