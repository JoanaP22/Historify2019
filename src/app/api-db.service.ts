import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDBService {

  utilizadoresURL = 'http://localhost:5000/api/utilizador/';
  concelhosURL = 'http://localhost:5000/api/concelho/';
  locaisURL = 'http://localhost:5000/api/local/';




  constructor(private http: HttpClient) { }

  listarUtilizadores() {

    return this.http.get<any[]>(this.utilizadoresURL);
  }

  listarConcelhos(src: string) {

    return this.http.get<any[]>(src);
  }

  listarLocais() {

    return this.http.get<any[]>(this.locaisURL);
  }




}

