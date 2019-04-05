import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { DataService } from '../data.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  @Input() doctors: any = [];
  @Input() getDoctors: any = [];
  // @Output() selectedCity: EventEmitter<any> = new EventEmitter<any>();

  selectedOption: string;
  getImageVal = [];

  constructor() { }
  // private dataService: DataService)

  // onSelect(event: TypeaheadMatch): void {
  //   this.selectedOption = event.item;
  //   this.dataService.weather.map(name => {
  //     if (this.selectedOption.includes(name.name)) {
  //       this.getData = [];
  //       this.getData.push(name);
  //       this.getImageVal = [];
  //       this.getImageVal.push(name.image);
  //     }
  //   });
  //   this.selectedCity.emit(this.getImageVal);
  // }

}
