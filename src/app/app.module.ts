import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './documents/home/home.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { ServicesComponent } from './documents/services/services.component';

const routes:Routes=[
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent }
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent
  ],
  imports: [  BrowserModule,routing  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
