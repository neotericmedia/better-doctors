import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  @Input() doctors: any = [];

  selectedOption: string;
  getImageVal = [];

  constructor() { }

}
