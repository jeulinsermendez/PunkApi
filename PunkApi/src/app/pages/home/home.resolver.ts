import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiDataService } from '../../services/api-data.service';
@Injectable({ providedIn: 'root' })
export class HomeResolver implements Resolve<any> {
  constructor(private apiDataService: ApiDataService) {}

  resolve( route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.apiDataService.getBeers();
  }
}
