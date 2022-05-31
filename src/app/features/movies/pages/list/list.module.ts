import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@NgModule({
  declarations: [ListComponent, MovieCardComponent],
  imports: [CommonModule, ListRoutingModule, SharedModule],
})
export class ListModule {}
