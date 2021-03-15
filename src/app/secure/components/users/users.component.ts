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
  users$: Observable<User[]> = of();
  page = 1;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void{
    this.users$ = this.userService.users(this.page);

  }

}
