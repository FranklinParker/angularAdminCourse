import { Component, OnInit } from '@angular/core';
import {User} from '../../../interfaces/user';
import {AuthService} from '../../../public/service/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  user: User | undefined;
  constructor(private authService: AuthService) { }

  async ngOnInit(): Promise<void> {
    this.user = await  this.authService.user();
    console.log('user', this.user);
  }

}
