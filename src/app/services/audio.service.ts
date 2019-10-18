import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  API_URI ="https://retoinnovati.herokuapp.com/api/";
 

  constructor(private http: HttpClient) { }

  getAudio(text){
    return this.http.post(this.API_URI + 'textToSpeech', text);
  }
}
