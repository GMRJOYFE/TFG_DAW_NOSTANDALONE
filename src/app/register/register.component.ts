import { Component } from '@angular/core';
import { AuthServiceComponent } from '../auth-service/auth-service.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: any = {}; // Aquí deberías tener un modelo o interfaz para el usuario

  constructor(private authService: AuthServiceComponent) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Registro exitoso', response);
        // Realiza acciones adicionales si es necesario, como navegar a otra página
      },
      (error) => {
        console.error('Error en el registro', error);
        // Maneja errores, muestra mensajes, etc.
      }
    );
  }
}
