import { Component, OnInit, ViewChild, AfterViewInit, Input, HostListener, AfterContentInit, TemplateRef, Inject } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Beer } from 'src/app/core/models/Beer';
import {TooltipPosition} from '@angular/material/tooltip';
import { AppConfigToken } from 'src/app/app.module';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit{

  @ViewChild('mobileTemplate', { static: true }) mobileTemplate!: TemplateRef<any>;
  @ViewChild('desktopTemplate', { static: true }) desktopTemplate!: TemplateRef<any>;

  displayedColumns: string[] = ['name', 'tagline','description', 'first_brewed', 'image_url','ingredients'];
  displayedColumnsName: string[] = ['Name', 'Tagline', 'Info', 'First Brewed', 'Image','More'];
  TooltipPosition = 'above' as TooltipPosition;


  isMobileView = window.innerWidth <= 660 && window.innerHeight <= 730;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isMobileView = window.innerWidth <= 660 || window.innerHeight <= 730;
  }

  @Input() beers!: Beer[];
  @Input() isMobile: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageSize = 10;
  totalItems = 0;
  currentPage = 1;
  itemsPerPageOptions: number[] = [5, 10, 20];
  tuListaDeElementos: any[] = [];
  displayedItems: Beer[] = [];

  constructor(@Inject(AppConfigToken) public deviceType: boolean[]) { }

  ngOnInit() {
    this.isMobileView = this.deviceType[0];
    console.log(this.beers);
    console.log('deviceType ',this.deviceType);


  }

  getTemplate(){
    return this.isMobileView ?  this.mobileTemplate : this.desktopTemplate;
  }
}

