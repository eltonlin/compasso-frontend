import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/service/github.service';
import { GitHubRepos } from 'src/app/models/github-repos';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public user: string;
  public repositorysByUser: GitHubRepos;
  public repositorysStarredByUser: GitHubRepos;


  constructor(
    private route:ActivatedRoute,
    private githubService: GithubService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.route.snapshot.params['user'];
    this.getGitHubRepositorysByUser();
    this.getGitHubStarredByUser();
    
  }

  getGitHubRepositorysByUser(){
    this.githubService.getGitHubReposByUser(this.user)
      .subscribe(repositorys => this.repositorysByUser = repositorys);
  }

  getGitHubStarredByUser(){
    this.githubService.getGitHubStarredByUser(this.user)
    .subscribe(repositorysStarred => this.repositorysStarredByUser = repositorysStarred );
  }

  backToHome(){
    this.router.navigate(['']);
  }

}
