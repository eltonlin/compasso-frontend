import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';
import { GithubUser } from '../models/github-user';
import { RouterModule, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  public githubUser: GithubUser;

  public user: string = "";

  constructor(
    private gitHubService: GithubService,
    private router: Router
    ) { }

  ngOnInit() {
    
  }

  getGitHubUser() {
    this.gitHubService.getGitHubUser(this.user)
      .subscribe( gitHubUser => {this.githubUser = gitHubUser; console.log(this.githubUser) }  );
  }

  clearGithubUser(){
    this.githubUser = undefined;
  }

  detailGitUser() {
    this.router.navigate(['detail', this.user ] );
  }

}
