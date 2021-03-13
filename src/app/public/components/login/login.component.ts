import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../public/public.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: ['', Validators.compose([
      Validators.required])],
    password: ['', Validators.compose([
      Validators.required])],
  }, {validators: []});

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    console.log('form ', this.form.value);
  }
}
