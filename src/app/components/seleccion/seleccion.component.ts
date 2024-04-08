import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrl: './seleccion.component.css'
})
export class SeleccionComponent {

  
  seleccionCategoria: string = "";


  //AL CARGAR EL COMPONENTE LLamamos al constructor y TRAEMOS EL MODULO ROUTER para hacer la SUBruta de la seleccion de tipo de productos 

  constructor(private rutas: Router) {

  }

  seleccion() {

    //Si esta establecido el click de seleccion de categoria..

    if (this.seleccionCategoria) {
      this.rutas.navigate(['productos', this.seleccionCategoria]);//.. la ruta sera productos/this.seleccionCategoria, lo que haya en esa variable
    } else {
      // Manejo adecuado si no se ha seleccionado ninguna categoría
      console.error("Por favor, selecciona una categoría antes de continuar.");
    }
  }

}


