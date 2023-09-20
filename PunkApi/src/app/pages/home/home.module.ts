import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ApiDataService } from 'src/app/services/api-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreService } from 'src/app/services/store.service';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    MatPaginatorModule,
  ],
  providers: [
    ApiDataService,
    StoreService
  ],
  declarations: [HomeComponent,]
})
export class HomeModule { }
