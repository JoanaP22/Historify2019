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
  concelhosURL = 'http://localhost:5000/api/concelho/';

  concselec: number = 1;
  descConc: string;
  show: boolean;
  // variáveis para mapa

  latitudeAtual: number;
  longitudeAtual: number;
  zoom: number = 15;
 // latitude: number ;
 // longitude: number ;
  latitude: number = 41.5317;
  longitude: number = -8.6179;


  // variáveis tempo

  temp: string;
  stateWeather: string;
  icon = 'http://openweathermap.org/img/wn/';
  iconVal: string;
  type = '@2x.png';

  src: string;



  historifyDB: ApiDBService;
  myWeather: ApiTempoService;

  constructor(private apiDBService: ApiDBService,
    private apiTempoService: ApiTempoService) {
    this.historifyDB = apiDBService;
    this.myWeather = apiTempoService;
  }


  // obter dados da API DB
  listarUtilizadores() {
    this.historifyDB.listarUtilizadores()
      .subscribe(dados => this.utilizadores = dados);
  }

  listarConcelhos() {
    this.historifyDB.listarConcelhos(this.concelhosURL)
      .subscribe(dados => this.concelhos = dados);
  }

  getConcelho(id: number) {
    this.historifyDB.listarConcelhos(this.concelhosURL + id)
      .subscribe(dados => {
        this.descConc = dados['descricao'];
        this.latitude = dados['latitude'];
       this.longitude = dados['longitude'];
      })
  }


  listarLocais() {
    this.historifyDB.listarLocais()
      .subscribe(dados => this.locais = dados);
  }

  // obter dados da api-tempo
  getAndFill() {
    this.myWeather.baseask(this.descConc).subscribe(
      data => {
        this.temp = (data['main']['temp']).toFixed(0);
        this.stateWeather = data['weather'][0]['description'];
        this.iconVal = data['weather'][0]['icon'];
        this.src = this.icon + this.iconVal + this.type;
      })
  }


  // localização atual do  utilizador

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.longitudeAtual = (position.coords.longitude);
        this.latitudeAtual = position.coords.latitude;
        // this.callApi(longitude, latitude);
      });
    } else {
      alert('Geolocalização nao suportada...')
    }
  }


  public onChange(event): void {  // event will give you full breif of action
    this.concselec = event.target.value;
    console.log(this.concselec);
  }

  public onClick(id: number) {  // guarda na variável concselec a id do concelho seleccionado
    this.concselec = id;
    this.getConcelho(id);
    this.getAndFill();


  }
  ngOnInit() {
    this.listarConcelhos();
    this.getConcelho(this.concselec);
    this.listarLocais();
    this.getAndFill();
    this.getLocation();
  }

}
