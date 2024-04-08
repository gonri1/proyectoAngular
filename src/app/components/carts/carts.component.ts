import { Component } from '@angular/core';
import { DatosapiService } from '../../service/datosapi.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {

  carts: any[] = []; // Puedes cambiar el tipo any[] según la estructura de tus datos

  constructor(private servicio: DatosapiService) {
    this.servicio.getAllProducts()?.subscribe(item => {
      this.carts = item.todos; // Asignación de la lista de carts
    });
  }
}



