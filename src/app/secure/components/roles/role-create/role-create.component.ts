import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleService} from '../../../../services/role.service';
import {Router} from '@angular/router';
import {PermissionService} from '../../../../services/permission.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: ['', Validators.compose([
      Validators.required, Validators.email])],
    permissions: this.fb.group([])
  }, {validators: []});
  constructor(private fb: FormBuilder,
              private router: Router,
              private permissionService: PermissionService,
              private roleService: RoleService) { }

  async ngOnInit(): Promise<void> {
    const permissions = await this.permissionService.all();

    const budgetItemsFormArray: FormArray = this.fb.array(budgetItems);
    this.form = this.fb.group({
      projectBudgetItems: budgetItemsFormArray
    }, );
  }
  submit(): void {
    this.roleService.create(this.form.getRawValue())
      .subscribe(role => this.router.navigate(['/roles']));
  }
}
