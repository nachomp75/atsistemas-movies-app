import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('@features/movies/pages/list/list.module').then(
        (m) => m.ListModule
      ),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('@features/movies/pages/new/new.module').then((m) => m.NewModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('@features/movies/pages/detail/detail.module').then(
        (m) => m.DetailModule
      ),
  },
  {
    path: '**',
    redirectTo: '/movies/list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
