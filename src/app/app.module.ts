import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Header/header.component';
import {HomeComponent} from "./Home/home.component"
import {AcceletorChartComponent} from "./Charts/accelerator.component";
import {MetricCharChartComponent} from "./Charts/acceletorMetricChart.component"
// import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AcceletorChartComponent,
    MetricCharChartComponent
    // AmplifyAngularModule
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    // AmplifyService
   
],
  bootstrap: [AppComponent]
})
export class AppModule { }


