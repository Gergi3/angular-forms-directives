import { ValidatorFn, AbstractControl } from '@angular/forms';

export function createMaxLengthValidator(config: number): ValidatorFn {
  const maxLengthValidator: ValidatorFn = (control: AbstractControl) => {
    return control.value.length > config 
      ? { maxCount: true }
      : null;
  }
  return maxLengthValidator;
}