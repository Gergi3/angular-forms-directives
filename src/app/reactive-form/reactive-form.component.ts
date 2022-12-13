import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { createMaxLengthValidator } from '../reactive-validators/maxLengthValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss', '../basic-form/basic-form.component.scss']
})
export class ReactiveFormComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2), createMaxLengthValidator(10)]],
  });
  constructor(
    private fb: FormBuilder
  ) { }

  registerHandler() {
    if (this.loginForm.invalid) { return; }
    let a = this.loginForm.get('email');
    
  }
}
