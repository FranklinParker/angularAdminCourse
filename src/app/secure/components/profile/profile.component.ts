import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../public/service/auth.service';
import {User} from '../../../interfaces/user';
import {Auth} from '../../../auth/auth';

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
    Auth.userEmitter.subscribe((user: User) => this.infoForm.patchValue(user));
  }

  infoSubmit(): void{
    this.authService.updateInfo( this.infoForm.getRawValue())
      .subscribe(user =>  Auth.userEmitter.emit(user));
  }

  passwordSubmit(): void{
    this.authService.updatePassword(this.passwordForm.getRawValue())
      .subscribe(user => console.log(user));
  }
}
