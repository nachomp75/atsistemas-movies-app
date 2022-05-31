import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () =>
      import('@features/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'actors',
    loadChildren: () =>
      import('@features/actors/actors.module').then((m) => m.ActorsModule),
  },
  {
    path: 'companies',
    loadChildren: () =>
      import('@features/companies/companies.module').then(
        (m) => m.CompaniesModule
      ),
  },
  {
    path: '**',
    redirectTo: '/movies/list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
