import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import  { HeaderComponent } from './Common/header.component';
import  { FootComponent } from './Common/footer.component';
import  { LeftComponentNavigation } from './Common/left.componen.navigation';
import  { RigthComponentContent } from './Common/rigth.component.content';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FootComponent,
    LeftComponentNavigation,
    RigthComponentContent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
