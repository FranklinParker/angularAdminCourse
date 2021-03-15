import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  infoForm: any;
  passwordForm: any;
  constructor(private fb: FormBuilder) { }

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

  async infoSubmit(): Promise<void> {
  }

  async passwordSubmit(): Promise<void> {
  }
}
