// Importa los módulos necesarios
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formregistro',
  templateUrl: './formregistro.component.html',
  styleUrls: ['./formregistro.component.scss']
})
export class FormregistroComponent {
  // Define el formulario de registro de usuarios
  registroForm: FormGroup;

  // Inyecta FormBuilder y HttpClient en el constructor
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    // Inicializa el formulario con campos y validadores
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    // Verifica si el formulario es válido
    if (this.registroForm.valid) {
      // Obtiene los valores del formulario
      const { nombre, apellido, correoElectronico, password } = this.registroForm.value;

      // Realiza una solicitud al servidor Express.js para registrar un nuevo usuario
      this.http.post('/register', { nombre, apellido, email: correoElectronico, password })
        .subscribe(response => {
          // Maneja la respuesta del servidor
          console.log(response);
          // Puedes mostrar un mensaje de éxito o redirigir al usuario a otra página
        }, error => {
          // Maneja los errores, por ejemplo, muestra un mensaje de error al usuario
          console.error(error);
        });
    }
  }
}
