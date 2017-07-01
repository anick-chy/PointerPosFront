import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { NotFoundComponent } from './not-found.component';
import { LoginComponent } from './login.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';

import { LoginService } from './login-reactive/login.service';

//test for login with in memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './login-reactive/in-memory-data.service';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule
  ],
  declarations: [ 
      AppComponent,
      LoginComponent,
      LoginReactiveComponent,
      NotFoundComponent
  ],
  providers: [ LoginService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
