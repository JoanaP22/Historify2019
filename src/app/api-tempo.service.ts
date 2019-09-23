import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTempoService {

  weahtherApiLink ='https://api.openweathermap.org/data/2.5/weather';
  params = '?q=';
  city = 'Barcelos';
  country = ',pt';
  apiKey = '&APPID='
  celcius = '&units=metric';

  constructor(private http: HttpClient) { }

baseask(){
  return this.http.get(this.weahtherApiLink + this.params + this.city + this.country  + this.apiKey + this.celcius);
}

}
