import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/store';
import * as facebook from 'app/store/facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() { }

  login(): void {
    this.store.dispatch(new facebook.Login());
  }
}
