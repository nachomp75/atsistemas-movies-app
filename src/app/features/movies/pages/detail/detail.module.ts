import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { MovieDurationPipe } from '../../pipes/movie-duration.pipe';

@NgModule({
  declarations: [DetailComponent, MovieDurationPipe],
  imports: [CommonModule, DetailRoutingModule, SharedModule],
})
export class DetailModule {}
