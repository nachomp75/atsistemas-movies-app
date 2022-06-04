import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '@app/shared/components/shared-components.module';
import { MaterialModule } from '@app/shared/material/material.module';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@NgModule({
  declarations: [ListComponent, MovieCardComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedComponentsModule,
    MaterialModule,
  ],
})
export class ListModule {}
