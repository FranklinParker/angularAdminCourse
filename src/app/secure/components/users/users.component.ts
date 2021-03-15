import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Observable, of} from 'rxjs';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  page = 1;
  constructor(private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    await this.getUsers();
  }

  private async getUsers(): Promise<void>{
    const response  = await this.userService.users(this.page);
    this.users = response.data;

  }

}
