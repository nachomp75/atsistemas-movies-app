import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { TranslateService } from '@ngx-translate/core';
import { map, tap } from 'rxjs';

import { StateService } from '@core/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private isMobile$ = this.breakpointObserver
    .observe([Breakpoints.XSmall])
    .pipe(
      map((result) => result.matches),
      tap((result) => !result && (this.stateService.sidebarOpened = false))
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private stateService: StateService,
    translate: TranslateService
  ) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
    this.isMobile$.subscribe((result) => (this.stateService.isMobile = result));
  }
}
