import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor(private http:HttpClient) { }
  getApi(){
    return this.http.get('https://foodrestro.glitch.me/api/foods')
  }
}
