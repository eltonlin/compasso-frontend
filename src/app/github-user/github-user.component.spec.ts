import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserComponent } from './github-user.component';
import { GithubService } from '../service/github.service';
import { of } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

fdescribe('GithubUserComponent', () => {
  let component: GithubUserComponent;
  let fixture: ComponentFixture<GithubUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        NgbModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [GithubUserComponent],
      providers: [GithubService]
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

  })
});
