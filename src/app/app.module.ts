import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Header/header.component';
import {HomeComponent} from "./Home/home.component"
import {AcceletorChartComponent} from "./Charts/accelerator.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AcceletorChartComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
   
],
  bootstrap: [AppComponent]
})
export class AppModule { }


