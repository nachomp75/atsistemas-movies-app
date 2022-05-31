import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent implements OnInit {
  @Input() color = '#1976d2';
  @Input() icon!: string;

  constructor() {}

  ngOnInit(): void {}
}
