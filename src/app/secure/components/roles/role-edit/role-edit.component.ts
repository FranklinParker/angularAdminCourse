import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Permission} from '../../../../interfaces/permission';
import {PermissionService} from '../../../../services/permission.service';
import {RoleService} from '../../../../services/role.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {
  permissions: Permission[] = [];
  id = 0;
  form: FormGroup = this.fb.group({
    name: ['', Validators.compose([
      Validators.required, Validators.email])],
    permissions: this.fb.array([])
  }, {validators: []});
  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private permissionService: PermissionService,
              private roleService: RoleService) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params.id;
    const role = await this.roleService.get(this.id);
    this.name.setValue(role.name);
    this.permissions = await this.permissionService.all();
    this.permissions.forEach(p => {
      this.permissionArray.push(
        this.fb.group({
          value: role.permissions.some((permission: { id: number; }) => permission.id === p.id),
          id: p.id
        })
      );
    });
  }
  submit(): void{
    const formData = this.form.getRawValue();

    const data = {
      name: formData.name,
      permissions: formData.permissions.filter( (p: { value: boolean; }) => p.value === true).map( (p: { id: any; }) => p.id)
    };
    this.roleService.update(data, this.id)
      .subscribe(() => this.router.navigate(['/roles']));

  }

  get permissionArray(): FormArray{
    return this.form.get('permissions') as FormArray;
  }
  get name(): FormControl{
    return this.form.get('name') as FormControl;
  }

}
