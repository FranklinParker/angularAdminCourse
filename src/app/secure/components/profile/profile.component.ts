import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../public/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  infoForm: any;
  passwordForm: any;
  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.infoForm = this.fb.group({
      first_name: ['', Validators.compose([
        Validators.required])],
      last_name: ['', Validators.compose([
        Validators.required])],
      email: ['', Validators.compose([
        Validators.required, Validators.email])],
    }, {validators: []});
    this.passwordForm = this.fb.group({
      password: ['', Validators.compose([
        Validators.required])],
      password_confirm: ['', Validators.compose([
        Validators.required])],
    }, {validators: []});
  }

  infoSubmit(): void{
  }

  passwordSubmit(): void{
  }
}
