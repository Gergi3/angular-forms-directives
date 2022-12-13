import { Directive, Input, TemplateRef, ViewContainerRef, OnChanges, Optional } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective implements OnChanges {

  @Input('appMyIf') condition!: boolean;
  @Input() template: TemplateRef<any> | undefined;

  constructor(
    private vc: ViewContainerRef,
    @Optional() private templateRef: TemplateRef<any>
  ) {
    this.template = this.templateRef || this.template;
  }

  ngOnChanges() {
    if (this.condition) {
      if (!this.template) { return; }
      this.vc.createEmbeddedView(this.template);
    } else {
      this.vc.clear();
    }
  }
}
