import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  lastPage = 1;
  constructor(private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    await this.getUsers();
  }

  private async getUsers(page = 1): Promise<void>{
    const response  = await this.userService.users(page);
    console.log('response', response);
    this.users = response.data;
    this.lastPage = response.meta.last_page;


  }

  async load(newPage: number): Promise<void> {
  }
}
