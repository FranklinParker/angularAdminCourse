import { Component, OnInit } from '@angular/core';
import {Role} from '../../../../interfaces/role';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {RoleService} from '../../../../services/role.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  id = 0;
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
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private roleService: RoleService) { }

  async ngOnInit(): Promise<void> {
    this.roles = await this.roleService.roles();
    this.id = this.route.snapshot.params.id;
    const user = await this.userService.getUser(this.id);
    this.form.patchValue(user);
    this.form.get('role_id')?.setValue(user.role?.id);

  }

  submit(): void{
    this.userService.update( this.form.getRawValue(), this.id)
      .subscribe(res => this.router.navigate(['/users']));
  }

}
