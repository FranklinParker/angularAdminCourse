import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../public/service/auth.service';
import {User} from '../../../interfaces/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: User | undefined;
  constructor(private authService: AuthService,
              private router:Router) { }
  async ngOnInit(): Promise<void> {
    this.user = await  this.authService.user();
    console.log('user', this.user);
  }

  async logout(): Promise<void> {
    try{
      await this.authService.logout();
      await this.router.navigate(['/login']);
    }catch(e){

    }
  }
}
