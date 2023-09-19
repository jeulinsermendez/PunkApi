import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { BasicCardComponent } from './components/basic-card/basic-card.component';
import {MatCardModule} from '@angular/material/card';
import { DataTableComponent } from 'src/app/shared/components/data-table/data-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    TopBarComponent,
    FooterComponent,
    BasicCardComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatRippleModule
  ],
  exports:[TopBarComponent, FooterComponent, BasicCardComponent,DataTableComponent]
})
export class SharedModule { }
