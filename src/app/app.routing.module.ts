import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'app/login/login.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { ChatPageComponent } from 'app/chat-page/chat-page.component';
import { AuthGuard } from 'app/guards';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'chat',
    component: ChatPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
