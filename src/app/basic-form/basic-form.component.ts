import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent {

  constructor() { }

  registerHandler(form: NgForm) {
    if (form.invalid) { return; }
    console.log(form.value);

    form.setValue( {email: '', password: 'pesho', rePassword: 'pesho'} );
  }
}
