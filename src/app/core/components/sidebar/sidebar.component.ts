import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs';

import { StateService } from '@core/services/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private router: Router, public stateService: StateService) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.stateService.sidebarOpened = false;
      });
  }

  handleCloseSideBar({ target }: MouseEvent) {
    if ((target as Element).className === 'sidebar-mobile__overlay') {
      this.stateService.sidebarOpened = false;
    }
  }
}
