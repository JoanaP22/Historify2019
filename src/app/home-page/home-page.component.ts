import { ApiTempoService } from './../api-tempo.service';
import { ApiDBService } from './../api-db.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
// variáveis ApiDBService
  utilizadores: Array<any>;
  concelhos: Array<any>;
  locais: Array<any>;


  // variáveis para mapa
  zoom: number = 15;
  latitude = 41.5317;
  longitude = -8.6179;

// variáveis tempo
temp: string;
stateWeather: string;
icon = 'http://openweathermap.org/img/wn/';
iconVal: string;
type = '@2x.png';

src: string;


myWeather: ApiTempoService;

  constructor(private apiDBService: ApiDBService,
     private apiTempoService: ApiTempoService) {
       this.myWeather = apiTempoService;
     }


  // obter dados da API DB
  listarUtilizadores() {
    this.apiDBService.listarUtilizadores()
      .subscribe(dados => this.utilizadores = dados);
  }

  listarConcelhos() {
    this.apiDBService.listarConcelhos()
      .subscribe(dados => this.concelhos = dados);
  }

  listarLocais() {
    this.apiDBService.listarLocais()
      .subscribe(dados => this.locais = dados);
  }

 

// obter dados da api-tempo

getAndFill() {

  this.myWeather.baseask().subscribe(

  data => {
  this.temp = data['main']['temp'];
  this.stateWeather = data['weather'][0]['description'];
  this.iconVal = data['weather'][0]['icon'];
  this.src = this.icon + this.iconVal + this.type;
  })
  }



  ngOnInit() {
    this.listarConcelhos();
    this.listarLocais();
    this.getAndFill();

  }

}
