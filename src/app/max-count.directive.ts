import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaxCountDirective,
      multi: true
    }
  ]
})
export class MaxCountDirective implements Validator {

  @Input('appMaxCount') max!: number;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.max && (control.value?.length || 0) <= this.max) {
      return null;
    }
    return {
      appMaxCount: this.max
    }
  }

}
