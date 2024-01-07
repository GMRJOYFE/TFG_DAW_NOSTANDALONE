import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './Pagina_Principal/cabecera/cabecera.component';
import { MainComponent } from './Pagina_Principal/main/main.component';
import { FooterComponent } from './Pagina_Principal/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
