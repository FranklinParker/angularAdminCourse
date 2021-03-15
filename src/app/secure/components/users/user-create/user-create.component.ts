import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {Role} from '../../../../interfaces/role';
import {RoleService} from '../../../../services/role.service';
import {UserService} from '../../../../services/user.service';

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
  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private roleService: RoleService) { }

  async ngOnInit(): Promise<void> {
    this.roles = await this.roleService.all();
  }

  submit(): void{
    this.userService.create(this.form.getRawValue())
      .subscribe(res => this.router.navigate(['/users']));
  }
}
