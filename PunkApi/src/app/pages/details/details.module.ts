import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { ApiDataService } from 'src/app/services/api-data.service';
import { DetailsRoutingModule } from './details-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    CoreModule,
    TranslateModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: [DetailsComponent],
  providers:[ApiDataService]
})
export class DetailsModule { }
