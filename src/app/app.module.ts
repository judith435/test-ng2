import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyClassComponent } from './my-class/my-class.component';
import { SecondClassComponent } from './second-class/second-class.component';
import { ThirdClassComponent } from './third-class/third-class.component';

@NgModule({
  declarations: [
    AppComponent,
    MyClassComponent,
    SecondClassComponent,
    ThirdClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
