import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { NotFoundComponent } from './not-found.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      AppRoutingModule
  ],
  declarations: [ 
      AppComponent,
      LoginComponent,
      NotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
