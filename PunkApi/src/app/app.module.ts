import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiDataService } from './services/api-data.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SpinnerInterceptor } from './core/components/spinner/spinner.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ApiDataService,
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
