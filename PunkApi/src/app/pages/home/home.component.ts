import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Beer } from 'src/app/core/models/Beer';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities: any[] | undefined;

  selectedCity: any | undefined;

  beers: Beer[] = [];

  pageSize = 10;
  totalItems = 0;
  currentPage = 1;
  itemsPerPageOptions: number[] = [5, 10, 20];
  tuListaDeElementos: any[] = [];
  displayedItems: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const { beers } = this.activatedRoute.snapshot.data;
    this.beers = beers;
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
    this.updateDisplayedItems();
  }
}
