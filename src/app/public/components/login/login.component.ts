import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../public/public.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: ['', Validators.compose([
      Validators.required, Validators.email])],
    password: ['', Validators.compose([
      Validators.required])],
  }, {validators: []});

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    try{
      await this.authService.login(this.form.value);
      await this.router.navigate(['/']);
    } catch (e){
      console.log('login error:', e);
    }
  }
}
