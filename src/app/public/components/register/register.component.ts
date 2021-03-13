import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../public/public.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(form: NgForm): Promise<void> {
    console.log('form', form.value);
    try{
      await this.authService.register(form.value);
      await this.router.navigate(['/login']);
    }catch (e){
      console.log('error', e);
    }
  }
}
