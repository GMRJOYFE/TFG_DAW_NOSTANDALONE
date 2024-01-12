// Importa los módulos necesarios
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formcambiopass',
  templateUrl: './formcambiopass.component.html',
  styleUrls: ['./formcambiopass.component.scss']
})
export class FormcambiopassComponent {
  // // Define el formulario de cambio de contraseña
  // cambioPassForm: FormGroup;

  // // Inyecta FormBuilder y HttpClient en el constructor
  // constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  //   // Inicializa el formulario con campos y validadores
  //   this.cambioPassForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     oldPassword: ['', Validators.required],
  //     newPassword: ['', Validators.required]
  //   });
  // }

  // // Método para manejar el envío del formulario
  // onSubmit() {
  //   // Verifica si el formulario es válido
  //   if (this.cambioPassForm.valid) {
  //     // Obtiene los valores del formulario
  //     const { username, oldPassword, newPassword } = this.cambioPassForm.value;

  //     // Realiza una solicitud al servidor Express.js para cambiar la contraseña
  //     this.http.post('/change-password', { username, oldPassword, newPassword })
  //       .subscribe(response => {
  //         // Maneja la respuesta del servidor
  //         console.log(response);
  //         // Puedes mostrar un mensaje de éxito o redirigir al usuario a otra página
  //       }, error => {
  //         // Maneja los errores, por ejemplo, muestra un mensaje de error al usuario
  //         console.error(error);
  //       });
  //   }
  // }
}
