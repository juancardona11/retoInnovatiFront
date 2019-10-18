import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  API_URI = "https://retoinnovati.herokuapp.com/api/";
  
  constructor(private http: HttpClient) { }

  sendPhoto(image: Object): Observable<any>{
   return this.http.post(this.API_URI + 'face', image);
  }
}
