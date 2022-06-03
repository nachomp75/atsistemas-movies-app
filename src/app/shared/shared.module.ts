import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { TranslateModule } from '@ngx-translate/core';

import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  declarations: [CircleButtonComponent, BackButtonComponent],
  imports: [CommonModule, TranslateModule, MatButtonModule],
  exports: [
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonModule,
    TranslateModule,
    CircleButtonComponent,
    BackButtonComponent,
  ],
})
export class SharedModule {}
