import { Directive, ElementRef, Renderer2, TemplateRef, Input, ViewContainerRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective  {
  @Input() appHover!: TemplateRef<any>;

  @HostBinding('style.color') color!: string;
  
  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  @HostListener('mouseenter')
  mouseEnterHandler() {
    this.color = 'red';
    this.viewContainerRef.createEmbeddedView(this.appHover);
  }

  @HostListener('mouseleave')
  mouseLeaveHandler() {
    this.color = 'initial';
    this.viewContainerRef.clear();
  }
}
