import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role} from '../../../../interfaces/role';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  roles: Role[] = [];
  form: FormGroup = this.fb.group({
    email: ['', Validators.compose([
      Validators.required, Validators.email])],
    first_name: ['', Validators.compose([
      Validators.required])],
    last_name: ['', Validators.compose([
      Validators.required])],
    role_id: ['', Validators.compose([
      Validators.required])],
  }, {validators: []});
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(): void{

  }
}
