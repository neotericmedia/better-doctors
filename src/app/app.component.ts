import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IDoctors } from './doctors';
import { DoctorsService } from './doctors.service';
import { MapService } from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('cardA', [
      state('void', style({
        'transform': 'translateY(-100%)',
        'opacity': 0
      })),
      state('nop', style({
        'transform': 'translateY(100%)',
        'opacity': 1
      })),
      transition('* => *', animate('.65s 0s cubic-bezier(0.455, 0.06, 0.515, 0.955)'))
    ])
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  doctors: IDoctors[] = [];
  errorMessage: string;

  constructor(private doctorService: DoctorsService, private mapService: MapService) { }

  ngOnInit() {

    this.doctorService.getDoctors().subscribe(
      doctors => {
        this.doctors = doctors.data;
      },
      error => this.errorMessage = <any>error
    );

    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.mapService.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.mapService.findMe();
  }


}
