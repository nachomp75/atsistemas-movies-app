import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly _isMobile = new BehaviorSubject<boolean>(false);
  private readonly _sidebarOpened = new BehaviorSubject<boolean>(false);

  readonly isMobile$ = this._isMobile.asObservable();
  readonly sidebarOpened$ = this._sidebarOpened.asObservable();

  get isMobile(): boolean {
    return this._isMobile.getValue();
  }

  get sidebarOpened(): boolean {
    return this._sidebarOpened.getValue();
  }

  set isMobile(value: boolean) {
    this._isMobile.next(value);
  }

  set sidebarOpened(value: boolean) {
    this._sidebarOpened.next(value);
  }
}
