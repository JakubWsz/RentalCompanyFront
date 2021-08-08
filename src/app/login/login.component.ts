import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {AuthenticatorService} from "../authenticator.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {username: '', password: ''}

  constructor(private httpService: HttpClientService, private authenticator: AuthenticatorService,private router: Router) {
  }


  ngOnInit(): void {
  }

  login() {
    this.httpService.login(this.user).subscribe(user => {
      this.user = {username: '', password: ''}
      this.authenticator.storeUser(user);
      this.router.navigate(['/create-branch'])
    },error => {
      const status: number = error.status
      if (status == 401){
        alert("Nieprawidłowy login bądź hasło")
      }
    })
  }
}
