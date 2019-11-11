import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserComponent } from './github-user.component';
import { GithubService } from '../service/github.service';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('GithubUserComponent', () => {
  let component: GithubUserComponent;
  let fixture: ComponentFixture<GithubUserComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ], 
      imports: [
        NgbModule.forRoot(),
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule, 
      ],
      declarations: [GithubUserComponent],
      providers: [GithubService, { provide: Router, useValue: mockRouter}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getGitHubUser', () => {
    const service = TestBed.get(GithubService);
    const gitHubUser = {
      login: 'eltonlin',
      name: 'Elton Linconl',
      company: 'Compasso'
    }
    spyOn(service, 'getGitHubUser').and.callFake(() => {
      return of(gitHubUser);
    })
    component.user = 'eltonlin';
    component.getGitHubUser();
    expect(component.githubUser).toEqual(gitHubUser);
  });

  it('should throw error getGitHubUser ', () => {
    const service = TestBed.get(GithubService);
    spyOn(service, 'getGitHubUser').and.returnValue(throwError({error : 'erro to get the user'}));
    component.getGitHubUser();
    expect(component.alert).toBe(true);
  })
  
  it('should call detail of git user', () => {
    component.user = "elton"
    component.detailGitUser();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['detail','elton']);
  })
});
