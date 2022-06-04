import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { SharedComponentsModule } from '@app/shared/components/shared-components.module';
import { MaterialModule } from '@app/shared/material/material.module';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { MovieDurationPipe } from '../../pipes/movie-duration.pipe';

@NgModule({
  declarations: [DetailComponent, MovieDurationPipe],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedComponentsModule,
    MaterialModule,
    NgxSkeletonLoaderModule,
  ],
})
export class DetailModule {}
