import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaPessoalComponent } from './area-pessoal/area-pessoal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { AdminComponent } from './admin/admin.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
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
    TestesparvosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
