import { Component, OnInit } from '@angular/core';
import { FacebookService, FacebookLoginResponse, FacebookInitParams } from 'ng2-facebook-sdk/dist';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FacebookService) { }

  ngOnInit() {
    const fbParams: FacebookInitParams = { appId: '106592409880991', xfbml: true, version: 'v2.8' };
    this.fb.init(fbParams);
  }

  login(): void {
    this.fb.login().then(
      (response: FacebookLoginResponse) => console.log(response),
      (error: any) => console.error(error)
    );
  }

}
