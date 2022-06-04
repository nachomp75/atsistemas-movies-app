import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TranslateModule } from '@ngx-translate/core';

import { CircleButtonComponent } from './circle-button/circle-button.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';

@NgModule({
  declarations: [
    CircleButtonComponent,
    BackButtonComponent,
    CommingSoonComponent,
  ],
  imports: [CommonModule, TranslateModule, MatButtonModule],
  exports: [
    TranslateModule,
    CircleButtonComponent,
    BackButtonComponent,
    CommingSoonComponent,
  ],
})
export class SharedComponentsModule {}
