import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiDataService } from './services/api-data.service';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { InjectionToken } from '@angular/core';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const AppConfigToken = new InjectionToken<any>('AppConfig');
export function loadAppConfig(translate: TranslateService) {
  translate.setDefaultLang('en');
  translate.use('en');
  return () => true;
}
export function loadAppConfigViewSize() {
  const isMobileView = window.innerWidth <= 660 || window.innerHeight <= 730;
  return () => isMobileView;
}

export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateHttpLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    ApiDataService,
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    {
      provide: AppConfigToken,
      useFactory: loadAppConfigViewSize(),
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadAppConfig,
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
