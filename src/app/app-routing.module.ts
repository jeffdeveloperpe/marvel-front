import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth-guard';
import {AppComponent} from "./app.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        component: LoginComponent,
        path: 'login'
      },
      {
        canActivate: [AuthGuard],
        path: '', component: AppComponent
      },
      {path: 'login', component: LoginComponent},
    ], {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
