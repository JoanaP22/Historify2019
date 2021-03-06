import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AreaPessoalComponent } from './area-pessoal/area-pessoal.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TestesparvosComponent } from './testesparvos/testesparvos.component';
import { LocaisComponent } from './locais/locais.component';



const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent},
  {path: 'area-pessoal', component: AreaPessoalComponent},
  {path: 'contactos', component: ContactosComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'sugestoes', component: SugestoesComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'testesparvos', component: TestesparvosComponent},
  {path: 'locais', component: LocaisComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
