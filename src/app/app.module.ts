import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GithubUsersProvider } from '../providers/github-users/github-users';
import { GithubReposProvider } from '../providers/github-repos/github-repos';
import { GithubOrgsProvider } from '../providers/github-orgs/github-orgs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserDetailsPage,
    ReposPage,
    OrganisationsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserDetailsPage,
    ReposPage,
    OrganisationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsersProvider,
    GithubReposProvider,
    GithubOrgsProvider
  ]
})
export class AppModule {}
