import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { FacebookService } from 'ng2-facebook-sdk';

import { LoginComponent } from './login.component';
import { ShellModule } from 'app/shell/shell.module';

@NgModule({
  imports: [
    CommonModule,
    ShellModule,
    MdButtonModule,
  ],
  providers: [
    FacebookService
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
