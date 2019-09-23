
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiDBService } from './api-db.service';
import { ApiTempoService } from './api-tempo.service';
import { AreaPessoalComponent } from './area-pessoal/area-pessoal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { AdminComponent } from './admin/admin.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { AgmCoreModule} from '@agm/core';
import { OrderModule } from 'ngx-order-pipe';
import { TestesparvosComponent } from './testesparvos/testesparvos.component';


@NgModule({
  declarations: [
    AppComponent,
    AreaPessoalComponent,
    NavbarComponent,
    ContactosComponent,
    HomePageComponent,
    LoginComponent,
    SugestoesComponent,
    AdminComponent,
    SobreNosComponent,
    TestesparvosComponent

  ],
  imports: [
    BrowserModule,
    OrderModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: ''})

  ],
  providers: [ApiDBService, ApiTempoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
