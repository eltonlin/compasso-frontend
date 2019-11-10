import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUser } from '../models/github-user';
import { HttpClient } from '@angular/common/http';
import { GitHubRepos } from '../models/github-repos';

const gitHubUrl = "https://api.github.com/users/";

const repos = "/repos";

const starred = "/starred";

@Injectable({
  providedIn: 'root'
})

export class GithubService {
  constructor(private http: HttpClient) { }

  getGitHubUser(name: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(gitHubUrl + name);
  }

  getGitHubReposByUser(name: string) : Observable<GitHubRepos> {
    return this.http.get<GitHubRepos>(gitHubUrl + name + repos);
  }

  getGitHubStarredByUser(name: string) : Observable<GitHubRepos> {
    return this.http.get<GitHubRepos>(gitHubUrl + name + starred);
  }


}
