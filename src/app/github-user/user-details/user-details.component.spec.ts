import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { GithubService } from 'src/app/service/github.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        NgbModule.forRoot(),
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [UserDetailsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getGitHubReposByUser', () => {
    const service = TestBed.get(GithubService);
    const githubRepos = {
      name : 'compasso-frontend',
      url : 'https://github.com/repos/compasso-frontend'
    }
    spyOn(service, 'getGitHubReposByUser').and.callFake(() => {
      return of(githubRepos);
    })
    component.user = 'eltonlin';
    component.getGitHubRepositorysByUser();
    expect(component.repositorysByUser).toEqual(githubRepos);
  });

  it('should call getGitHubReposByUser', () => {
    const service = TestBed.get(GithubService);
    const githubReposStarred = {
      name : 'compasso-frontend',
      url : 'https://github.com/repos/compasso-frontend'
    }
    spyOn(service, 'getGitHubStarredByUser').and.callFake(() => {
      return of(githubReposStarred);
    })
    component.user = 'eltonlin';
    component.getGitHubStarredByUser();
    expect(component.repositorysStarredByUser).toEqual(githubReposStarred);
  });

});
