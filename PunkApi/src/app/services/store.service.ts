import { Injectable } from '@angular/core';
import { Beer } from '../core/models/Beer';
import { BehaviorSubject } from 'rxjs';
import { ApiDataService } from './api-data.service';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private beers: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([]);
  public beers$ = this.beers.asObservable();
  constructor(private apiDataService: ApiDataService) {}

  getBeers(page: number = 1, pageSize: number = 4): void {
    this.apiDataService.getBeers().subscribe(data => {
      this.beers.next(data);
      console.log(this.beers.getValue());
    });
  }
}
