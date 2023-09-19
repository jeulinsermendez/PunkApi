import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Beer } from '../core/models/Beer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

constructor(private httpClient: HttpClient) { }

 /**
   * Get beers
   */
 getBeers(page: number = 1, pageSize: number = 4): Observable<Beer[]> {
  //?page=${page}&per_page=${pageSize}
  return this.httpClient.get<Beer[]>(`${environment.url}beers`);
}

}
