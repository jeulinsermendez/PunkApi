import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    // LoaderSpinnerComponent
  ],
  imports: [
    CommonModule,
     LayoutModule,
    // NgxSpinnerModule

  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorHandlerService,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpRequestsService,
    //   multi: true
    // },
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  exports: [
    // LoaderSpinnerComponent
     LayoutModule,
    // NgxSpinnerModule,
  ]
})
export class CoreModule { }
