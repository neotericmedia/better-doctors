import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IDoctors } from './doctors';
import { DoctorsService } from './doctors.service';

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
  doctors: IDoctors[] = [];
  errorMessage: string;

  constructor(private productService: DoctorsService) { }

  ngOnInit(): void {
    this.productService.getDoctors().subscribe(
      doctors => {
        this.doctors = doctors.data;
      },
      error => this.errorMessage = <any>error
    );
  }

}


