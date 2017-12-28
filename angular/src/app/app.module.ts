import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import {dataService} from './service/dataService.service';
import {routing,routerProvider} from './router';
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,routing ],
  declarations: [ AppComponent,HelloComponent,HeaderComponent, HomeComponent ],
  providers:[dataService,routerProvider],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
