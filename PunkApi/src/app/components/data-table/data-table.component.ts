import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
  HostListener,
  AfterContentInit,
  TemplateRef,
  Inject,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Beer } from 'src/app/core/models/Beer';
import { TooltipPosition } from '@angular/material/tooltip';
import { AppConfigToken } from 'src/app/app.module';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @ViewChild('mobileTemplate', { static: true })
  mobileTemplate!: TemplateRef<any>;
  @ViewChild('desktopTemplate', { static: true })
  desktopTemplate!: TemplateRef<any>;
  @ViewChild('customDialogTemplate', { static: true })
  customDialogTemplate!: TemplateRef<any>;

  displayedColumns: string[] = [
    'name',
    'tagline',
    'description',
    'first_brewed',
    'image_url',
    'ingredients',
  ];
  displayedColumnsName: string[] = [];
  TooltipPosition = 'above' as TooltipPosition;

  clickForInfo: string= '';

  isMobileView = window.innerWidth <= 660 && window.innerHeight <= 730;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isMobileView = window.innerWidth <= 660 || window.innerHeight <= 730;
  }

  @Input() beers!: Beer[];
  @Input() isMobile: boolean = false;
  selectedBeer!: Beer;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageSize = 10;
  totalItems = 0;
  currentPage = 1;
  itemsPerPageOptions: number[] = [5, 10, 20];
  tuListaDeElementos: any[] = [];
  displayedItems: Beer[] = [];

  constructor(
    private translate: TranslateService,
    @Inject(AppConfigToken) public deviceType: boolean[],
    public dialog: MatDialog,
    private router: Router
  ) {
    this.translate.onLangChange.subscribe((value: string) => {
      this.setTranslate();
    })

  }

  ngOnInit() {
    this.setTranslate();
    this.isMobileView = this.deviceType[0];
  }

  setTranslate(){
    this.displayedColumnsName = [];
    this.clickForInfo = this.translate.instant(`data_table.click_desc`);
    this.displayedColumns.forEach(displayedColumn => {
      const columnName = this.translate.instant(`data_table.${displayedColumn}`);
      this.displayedColumnsName.push(columnName);
    });
  }
  closeDialog(){}



  getTemplate() {
    return this.isMobileView ? this.mobileTemplate : this.desktopTemplate;
  }

  selectBeer(beer: Beer) {
    this.selectedBeer = beer;
    console.log(this.selectedBeer);
    this.openDialog();
  }
  goToDetails(beer: Beer){
    this.router.navigate(['/details', beer.id]);
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        beer: this.selectedBeer,
        template: this.customDialogTemplate,
      },
    });
  }
}
