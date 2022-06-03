import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { NewComponent } from './new.component';
import { NewRoutingModule } from './new-routing.module';

@NgModule({
  declarations: [NewComponent],
  imports: [CommonModule, NewRoutingModule, SharedModule],
})
export class NewModule {}
