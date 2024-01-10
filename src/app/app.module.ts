// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Agrega esta línea

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
import { Main3Component } from './Pagina_Registro/main3/main3.component';
import { FormregistroComponent } from './Pagina_Registro/formregistro/formregistro.component';
import { Main4Component } from './Pagina_CambioPass/main4/main4.component';
import { FormcambiopassComponent } from './Pagina_CambioPass/formcambiopass/formcambiopass.component';

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
    Main3Component,
    FormregistroComponent,
    Main4Component,
    FormcambiopassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Agrega FormsModule al arreglo de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
