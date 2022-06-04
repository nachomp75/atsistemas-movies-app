import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from '@app/shared/components/shared-components.module';
import { MaterialModule } from '@app/shared/material/material.module';
import { NewComponent } from './new.component';
import { NewRoutingModule } from './new-routing.module';

@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewRoutingModule,
    SharedComponentsModule,
    MaterialModule,
  ],
})
export class NewModule {}
