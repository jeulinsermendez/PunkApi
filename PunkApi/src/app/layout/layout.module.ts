import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatSidenavModule
  ],
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
