import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Beer } from 'src/app/core/models/Beer';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  beer!: Beer;
  constructor(private activatedRoute: ActivatedRoute, private apiDataService: ApiDataService, public translate: TranslateService) {
  }

  ngOnInit() {
    const { beer} =  this.activatedRoute.snapshot.data;
    this.beer = beer[0];
    console.log(this.activatedRoute.snapshot.data);
    console.log(beer);
  }

  goBack() {
    window.history.back();
  }

}
