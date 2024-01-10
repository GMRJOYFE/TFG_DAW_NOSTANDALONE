import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  // email: string = '';
  // password: string = '';

  // constructor(private http: HttpClient) {}

  // login() {
  //   const apiUrl = 'http://localhost:4200/main2';

  //   // Realiza una solicitud POST al servidor Express
  //   this.http.post(apiUrl, { email: this.email, password: this.password }).subscribe(response => {
  //     console.log(response);
  //     // Maneja la respuesta del servidor aquí
  //   });
  // }
}
