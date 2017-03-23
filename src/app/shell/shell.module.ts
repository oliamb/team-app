import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule } from '@angular/material';
import { FacebookService } from 'ng2-facebook-sdk';

import { ShellComponent, ShellTitleDirective } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule
  ],
  providers: [
    FacebookService
  ],
  declarations: [
    ShellComponent,
    ShellTitleDirective
  ],
  exports: [
    ShellComponent,
    ShellTitleDirective
  ]
})
export class ShellModule { }
