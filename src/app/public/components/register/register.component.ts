import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  first_name = '';
  last_name = '';
  email = '';
  password = '';
  password_confirm = '';
  constructor() { }

  ngOnInit(): void {
  }

  async onSubmit(form: NgForm): Promise<void> {
    console.log('form', form.value);
  }
}
