import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCompactNumberModule } from 'ngx-compact-number'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCompactNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
