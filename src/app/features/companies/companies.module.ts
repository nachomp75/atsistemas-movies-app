import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';

@NgModule({
  declarations: [CompaniesComponent],
  imports: [CommonModule, CompaniesRoutingModule, SharedComponentsModule],
})
export class CompaniesModule {}
