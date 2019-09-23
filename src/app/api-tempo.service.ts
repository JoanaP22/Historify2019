import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTempoService {

  //tempoURL = 'http://api.openweathermap.org/data/2.5/weather?q=Barcelos,pt&APPID=27572f5bbca7f98bcd805ae3a4f99413';
  //getTempo: string ='weather';

  weahtherApiLink ='https://api.openweathermap.org/data/2.5/weather';
  params = '?q=';
  city = 'Barcelos';
  country = ',pt';
  apiKey = '&APPID=27572f5bbca7f98bcd805ae3a4f99413'
  celcius = '&units=metric';

  constructor(private http: HttpClient) { }

baseask(){
  return this.http.get(this.weahtherApiLink + this.params + this.city + this.country  + this.apiKey + this.celcius);
}

}
