import { Component } from '@angular/core';
import { AuthServiceComponent} from '../auth-service/auth-service.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials: any = {}; // Aquí deberías tener un modelo o interfaz para las credenciales

  constructor(private authService: AuthServiceComponent) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log('Inicio de sesión exitoso', response);
        // Realiza acciones adicionales si es necesario, como navegar a otra página
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
        // Maneja errores, muestra mensajes, etc.
      }
    );
  }
}
