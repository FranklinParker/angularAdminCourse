import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleService} from '../../../../services/role.service';
import {Router} from '@angular/router';
import {PermissionService} from '../../../../services/permission.service';
import {Permission} from '../../../../interfaces/permission';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {
  permissions: Permission[] = [];
  form: FormGroup = this.fb.group({
    name: ['', Validators.compose([
      Validators.required, Validators.email])],
    permissions: this.fb.array([])
  }, {validators: []});
  constructor(private fb: FormBuilder,
              private router: Router,
              private permissionService: PermissionService,
              private roleService: RoleService) { }

  async ngOnInit(): Promise<void> {
    this.permissions = await this.permissionService.all();
    this.permissions.forEach(p => {
      this.permissionArray.push(
        this.fb.group({
          value: false,
          id: p.id
        })
      );
    });
  }


  get permissionArray(): FormArray {
    return this.form.get('permissions') as FormArray;
  }

  submit(): void {
    const formData = this.form.getRawValue();

    const data = {
      name: formData.name,
      permissions: formData.permissions.filter( (p: { value: boolean; }) => p.value === true).map( (p: { id: any; }) => p.id)
    };
    console.log('data', data);
    this.roleService.create(data)
      .subscribe(() => this.router.navigate(['/roles']));
  }

}
