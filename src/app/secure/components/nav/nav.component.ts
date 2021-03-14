import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../public/service/auth.service';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: User | undefined;
  constructor(private authService: AuthService) { }

  async ngOnInit(): Promise<void> {
    this.user = await  this.authService.user();
    console.log('user', this.user);
  }

  logout(): void {

  }
}
