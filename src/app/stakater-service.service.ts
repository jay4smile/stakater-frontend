import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observer, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StakaterServiceService {

  constructor(private httpClient: HttpClient) { }

  getGreetings(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return new Observable((observer: Observer<any>) => {
      this.httpClient.get(environment.apiUrl + '/api/greetings', {headers: headers, responseType: 'text'}).subscribe(response => {
        observer.next(response);
        observer.complete();
      });
    });
    
  }
}
