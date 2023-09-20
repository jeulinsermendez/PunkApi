import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeResolver } from './pages/home/home.resolver';
import { DetailsResolver } from './pages/details/details.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        resolve: {
          beers: HomeResolver
        }
      },
      {
        path: 'details/:id',
        loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule),
        resolve: {
          beer: DetailsResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
