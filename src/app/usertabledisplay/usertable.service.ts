import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsertableService {
  url:string='https://nodejsapidemo.herokuapp.com/users/';

  constructor(private _http:HttpClient) { }

  getAllUsers() {
    return this._http.get(this.url);
  }
}
