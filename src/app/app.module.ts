import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { WebModule } from 'projects/web/src/app/app.module';
// import { MobileModule } from 'projects/mobile/src/app/app.module';
// import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // WebModule.forRoot(),
    // MobileModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
