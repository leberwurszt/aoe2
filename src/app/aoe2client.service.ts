import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class Aoe2ClientService {

  constructor(private http:HttpClient) { }

  getCivilizations(): any {
    return this.http.get('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
  }
}
