import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import  { HeaderComponent } from './Common/header.component';
import  { FootComponent } from './Common/footer.component';
import  { LeftComponentNavigation } from './Common/left.componen.navigation';
import  { RigthComponentContent } from './Common/rigth.component.content';
import { RestApiComponent } from './resServices/rest.api.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FootComponent,
    LeftComponentNavigation,
    RigthComponentContent,
    RestApiComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
