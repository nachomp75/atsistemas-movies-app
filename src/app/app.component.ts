import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChildrenOutletContexts } from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
} from '@angular/animations';

import { TranslateService } from '@ngx-translate/core';
import { map, tap } from 'rxjs';

import { StateService } from '@core/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('ListPage => NewPage, ListPage => DetailPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
          }),
        ]),
        query(':enter', [style({ right: '-100%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('0.3s ease-out', style({ right: '100%', opacity: 0 })),
          ]),
          query(':enter', [
            animate('0.3s ease-out', style({ right: '0%', opacity: 1 })),
          ]),
        ]),
        query(':enter', animateChild()),
      ]),
      transition('NewPage => ListPage, DetailPage => ListPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
          }),
        ]),
        query(':enter', [style({ left: '-100%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('0.3s ease-out', style({ left: '100%', opacity: 0 })),
          ]),
          query(':enter', [
            animate('0.3s ease-out', style({ left: '0%', opacity: 1 })),
          ]),
        ]),
        query(':enter', animateChild()),
      ]),
    ]),
  ],
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
    private contexts: ChildrenOutletContexts,
    translate: TranslateService
  ) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
    this.isMobile$.subscribe((result) => (this.stateService.isMobile = result));
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
