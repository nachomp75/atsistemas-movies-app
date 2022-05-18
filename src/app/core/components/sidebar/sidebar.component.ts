import { Component } from '@angular/core';

import { StateService } from '@core/services/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public stateService: StateService) {}

  handleCloseSideBar({ target }: MouseEvent) {
    if ((target as Element).className === 'sidebar-mobile__overlay') {
      this.stateService.sidebarOpened = false;
    }
  }
}
