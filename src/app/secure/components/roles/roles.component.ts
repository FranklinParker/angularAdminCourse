import {Component, OnInit} from '@angular/core';
import {Role} from '../../../interfaces/role';
import {RoleService} from '../../../services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];
  lastPage = 1;
  constructor(private roleService: RoleService) { }

  async ngOnInit(): Promise<void> {
    await this.getRoles();
  }

  private async getRoles(page = 1): Promise<void>{
    const response  = await this.roleService.all(page);
    console.log('response', response);
    this.roles = response.data;

  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.roleService.delete(id).subscribe(
        () => {
          this.roles = this.roles.filter(u => u.id !== id);
        }
      );
    }
  }

}
