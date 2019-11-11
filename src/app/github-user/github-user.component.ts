import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';
import { GithubUser } from '../models/github-user';
import { RouterModule, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { timeout } from 'q';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  public githubUser: GithubUser;

  public user: string;

  public alert: boolean;

  constructor(
    private gitHubService: GithubService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = "";
  }

  getGitHubUser() {
    this.gitHubService.getGitHubUser(this.user)
      .subscribe(gitHubUser => {
        this.githubUser = gitHubUser
      }, error => {
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 3000);
      });
  }

  detailGitUser() {
    this.router.navigate(['detail', this.user]);
  }

}
