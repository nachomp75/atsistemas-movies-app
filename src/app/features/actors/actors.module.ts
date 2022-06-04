import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsComponent } from './actors.component';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';

@NgModule({
  declarations: [ActorsComponent],
  imports: [CommonModule, ActorsRoutingModule, SharedComponentsModule],
})
export class ActorsModule {}
