import { Component, OnInit } from '@angular/core';
import {User} from '../../../interfaces/user';
import {AuthService} from '../../../public/service/auth.service';
import {Router} from '@angular/router';
import {Auth} from '../../../auth/auth';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  user: User | undefined;
  constructor(private authService: AuthService,
              private router: Router) { }

  async ngOnInit(): Promise<void> {
    try{
      this.user = await  this.authService.user();
      Auth.userEmitter.emit(this.user);

    } catch (e){
      await this.router.navigate(['/login']);
    }
  }

}
