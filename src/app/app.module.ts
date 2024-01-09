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
import { PublicidadComponent } from './Pagina_Principal/publicidad/publicidad.component';
import { PreciosComponent } from './Pagina_Principal/precios/precios.component';
import { Main2Component } from './Pagina_InicioSesion/main2/main2.component';
import { FormularioComponent } from './Pagina_InicioSesion/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MainComponent,
    FooterComponent,
    Body2Component,
    Body1Component,
    PublicidadComponent,
    PreciosComponent,
    Main2Component,
    FormularioComponent,
    Body3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
