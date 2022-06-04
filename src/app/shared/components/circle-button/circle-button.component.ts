import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent {
  @Input() color = '#3f51b5';
  @Input() icon!: string;

  constructor() {}
}
