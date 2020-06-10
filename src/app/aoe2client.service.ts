import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL: string = "https://age-of-empires-2-api.herokuapp.com/api/v1";


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
    return this.http.get(`${BASE_URL}/civilizations`);
  }

  getUnits(): any {
    return this.http.get(`${BASE_URL}/units`);
  }

  getTechs(): any {
    return this.http.get(`${BASE_URL}/technologies`);
  }

  getStructures(): any {
    return this.http.get(`${BASE_URL}/structures`);
  }

  getCivilizationDetail(name: string): any {
    return this.http.get(`${BASE_URL}/civilization/${name}`);
  }

  getUnitDetail(name: string): any {
    return this.http.get(`${BASE_URL}/unit/${name}`);
  }

  getTechDetail(name: string): any {
    return this.http.get(`${BASE_URL}/technology/${name}`);
  }

  getStructureDetail(name: string): any {
    return this.http.get(`${BASE_URL}/structure/${name}`);
  }
  
}
