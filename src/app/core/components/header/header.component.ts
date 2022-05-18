import { Component } from '@angular/core';

import { StateService } from '@core/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public stateService: StateService) {}

  handleOnClickSidebar() {
    this.stateService.sidebarOpened = !this.stateService.sidebarOpened;
  }
}
