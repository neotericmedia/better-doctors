import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DoctorsService {

  private rootUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?location=';
  private clientKey = '498be0b019e82e78536a73a67a584b5a';
  private location = '37.773%2C-122.413';

  private url = this.rootUrl + this.location + '%2C100&user_location=' + this.location + '&skip=0&limit=10&user_key=' + this.clientKey;

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any> {
    console.log(this.location);
    return this.http.get<any>(this.url);
  }


}
