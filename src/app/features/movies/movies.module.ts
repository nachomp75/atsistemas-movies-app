import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MoviesRoutingModule],
  providers: [MoviesService],
})
export class MoviesModule {}
