import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output()menuToogle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.menuToogle.emit();
  }

}
