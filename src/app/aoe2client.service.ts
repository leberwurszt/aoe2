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

  getFromUrl(url): any {
    return this.http.get(url);
  }

  getCivilizations(): any {
    return this.http.get('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
  }

  getCivilizationDetail(id): any {
    return this.http.get(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
  }

  getUnitDetail(name: string): any {
    return this.http.get(`https://age-of-empires-2-api.herokuapp.com/api/v1/unit/${name}`);
  }

  getTechDetail(name: string): any {
    return this.http.get(`https://age-of-empires-2-api.herokuapp.com/api/v1/technology/${name}`);
  }



}
