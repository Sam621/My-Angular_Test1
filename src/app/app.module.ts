import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { UserdetailComponent } from './user/userdetail.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user/userdetail/:id', component: UserdetailComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
