import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiDataService } from 'src/app/services/api-data.service';

@Injectable({ providedIn: 'root' })
export class DetailsResolver implements Resolve<any> {
  constructor( private route: ActivatedRoute, private apiDataService: ApiDataService) {}

  resolve( route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
      const {id} = route.params;
    return this.apiDataService.getBeersById(id);
  }
}1
