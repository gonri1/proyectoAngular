import { Component } from '@angular/core';
import { Usuario } from '../../model/Usuario';
import Swal from 'sweetalert2'
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent {

  //Lista de usuarios registrados

  usuarios = [
    { "nombre": "ivan", "password": "1234" },
    { "nombre": "emma", "password": "1234" },
    { "nombre": "carlos", "password": "abcd" },
    { "nombre": "laura", "password": "password123" },
    { "nombre": "juan", "password": "juanjuan" },
    { "nombre": "maria", "password": "maria123" },
    { "nombre": "pedro", "password": "pedropedro" },
    { "nombre": "ana", "password": "anaana" },
    { "nombre": "diego", "password": "diegodiego" },
    { "nombre": "lucia", "password": "lucialucia" }
  ]



  // Sacamos datos del modelo y los metemos en un array de Interfaces (clase)

  nombreN: string = "";
  passwordP: string = "";
  usuarioLogueado: string = "";

  


  login() {

    let accesoAceptado = false;

    this.usuarios.forEach(element => {
      if (element.nombre === this.nombreN && element.password === this.passwordP) {
        accesoAceptado = true;
      }
    });

    if (accesoAceptado) {
      Swal.fire("Acceso Aceptado");
      this.usuarioLogueado = this.nombreN;
    } else {
      Swal.fire("Acceso Denegado");
    }
  }
}

