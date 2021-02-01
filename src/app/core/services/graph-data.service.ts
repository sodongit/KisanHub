import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {
  private readonly URL = 'https://storage.googleapis.com/kisanhub-interview-question-data/metoffice/';

  constructor(private http: HttpClient) {
  }

  resolveItems({selectedMetric, selectedArea}): Observable<any> {
    console.log('Request is sent!');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    return this.http.get(`${this.URL}${selectedMetric}-${selectedArea}.json`);
  }
}
