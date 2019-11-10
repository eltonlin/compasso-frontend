import { NgModule } from '@angular/core';
import { GithubUserComponent } from './github-user/github-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './github-user/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: GithubUserComponent},
  { path: 'detail/:user', component: UserDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
