import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Pagina_Principal/main/main.component';
import { Main2Component } from './Pagina_InicioSesion/main2/main2.component';
import { Main3Component } from './Pagina_Registro/main3/main3.component';
import { Main4Component } from './Pagina_CambioPass/main4/main4.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {path: 'main', component: MainComponent},
  {path: 'main2', component: Main2Component},
  {path: 'main3', component: Main3Component},
  {path: 'main4', component: Main4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
