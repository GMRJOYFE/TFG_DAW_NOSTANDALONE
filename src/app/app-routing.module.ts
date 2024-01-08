import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Pagina_Principal/main/main.component';
import { Main2Component } from './Pagina_InicioSesion/main2/main2.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'main2', component: Main2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
