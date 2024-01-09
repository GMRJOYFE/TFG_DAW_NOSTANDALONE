import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './Pagina_Principal/cabecera/cabecera.component';
import { MainComponent } from './Pagina_Principal/main/main.component';
import { FooterComponent } from './Pagina_Principal/footer/footer.component';
import { Body1Component } from './Pagina_Principal/body1/body1.component';
import { Body2Component } from './Pagina_Principal/body2/body2.component';
import { Body3Component } from './Pagina_Principal/body3/body3.component';
import { Body4Component } from './Pagina_Principal/body4/body4.component';
import { PublicidadComponent } from './Pagina_Principal/publicidad/publicidad.component';
import { PreciosComponent } from './Pagina_Principal/precios/precios.component';
import { Main2Component } from './Pagina_InicioSesion/main2/main2.component';
import { FormularioComponent } from './Pagina_InicioSesion/formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { Main3Component } from './Pagina_Registro/main3/main3.component';
import { FormregistroComponent } from './Pagina_Registro/formregistro/formregistro.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MainComponent,
    FooterComponent,
    Body2Component,
    Body1Component,
    Body4Component,
    PublicidadComponent,
    PreciosComponent,
    Main2Component,
    FormularioComponent,
    Body3Component,
    LoginComponent,
    Main3Component,
    FormregistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
