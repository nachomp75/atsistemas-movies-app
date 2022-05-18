import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@NgModule({
  declarations: [ListComponent, MovieCardComponent],
  imports: [CommonModule],
})
export class ListModule {}
