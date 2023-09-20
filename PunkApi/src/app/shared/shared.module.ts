import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { BasicCardComponent } from './components/basic-card/basic-card.component';
import {MatCardModule} from '@angular/material/card';
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    TopBarComponent,
    FooterComponent,
    BasicCardComponent,
    DataTableComponent,
    DialogComponent
  ],
  imports: [
    MatMenuModule,
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    TranslateModule,
    MatIconModule,
    MatStepperModule,
    MatRippleModule
  ],
  exports:[TopBarComponent, FooterComponent, BasicCardComponent,DataTableComponent,DialogComponent,TranslateModule]
})
export class SharedModule { }
