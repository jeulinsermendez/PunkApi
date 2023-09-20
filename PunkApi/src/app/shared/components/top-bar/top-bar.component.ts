import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output()menuToogle = new EventEmitter<void>();

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }
  changeLanguage(lang: string){
    this.translate.use(lang);
    console.log(this.translate,lang);
  }

}
