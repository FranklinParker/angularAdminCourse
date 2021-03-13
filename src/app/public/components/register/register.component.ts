import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegisterService} from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  async onSubmit(form: NgForm): Promise<void> {
    console.log('form', form.value);
    await this.registerService.register(form.value);
  }
}
