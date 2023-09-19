import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ApiDataService } from 'src/app/services/api-data.service';
import { StoreService } from 'src/app/services/store.service';
import { MatTableDataSource } from '@angular/material/table';
import { Beer } from 'src/app/core/models/Beer';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  beers: Beer[] = [];

   // Otras propiedades y métodos de tu componente
   pageSize = 10; // Cantidad de elementos por página
   totalItems = 0; // Total de elementos en la lista
   currentPage = 1; // Página actual
   itemsPerPageOptions: number[] = [5, 10, 20]; // Opciones de cantidad por página
   tuListaDeElementos: any[] = []; // Tu lista de elementos (cámbiala por tu propia lista)
   displayedItems: any[] = []; // Lista de elementos a mostrar en la página actual

  constructor(
    public store: StoreService,
    private activatedRoute: ActivatedRoute,
    private apiDataService: ApiDataService,
  ) {}

  ngOnInit() {
    const { beers} =  this.activatedRoute.snapshot.data;
    this.beers  = beers;
    this.totalItems = this.beers.length;
    this.updateDisplayedItems();
  }


  updateDisplayedItems(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems = this.beers.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.store.getBeers(this.currentPage,this.pageSize);
    this.getBeers(this.currentPage,this.pageSize);
    this.updateDisplayedItems();
  }

  getBeers(page: number, pageSize: number){
    this.apiDataService.getBeers(page, pageSize).subscribe(data => {
      this.beers = data;
    })
  }

}
