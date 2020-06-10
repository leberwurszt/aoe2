import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL: string = "https://age-of-empires-2-api.herokuapp.com/api/v1";
const UNITS_DIR: string = "units";
const CIVS_DIR: string = "civilizations";
const TECHS_DIR: string = "technologies";
const STRUCTS_DIR: string = "structures";
const UNIT_DIR: string = "unit";
const CIV_DIR: string = "civilization";
const TECH_DIR: string = "technology";
const STRUCT_DIR: string = "structure";

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
    return this.http.get(`${BASE_URL}/${CIVS_DIR}`);
  }

  getUnits(): any {
    return this.http.get(`${BASE_URL}/${UNITS_DIR}`);
  }

  getTechs(): any {
    return this.http.get(`${BASE_URL}/${TECHS_DIR}`);
  }

  getStructures(): any {
    return this.http.get(`${BASE_URL}/${STRUCTS_DIR}`);
  }

  getCivilizationDetail(name: string): any {
    return this.http.get(`${BASE_URL}/${CIV_DIR}/${name}`);
  }

  getUnitDetail(name: string): any {
    return this.http.get(`${BASE_URL}/${UNIT_DIR}/${name}`);
  }

  getTechDetail(name: string): any {
    return this.http.get(`${BASE_URL}/${TECH_DIR}/${name}`);
  }

  getStructureDetail(name: string): any {
    return this.http.get(`${BASE_URL}/${STRUCT_DIR}/${name}`);
  }
  
}
