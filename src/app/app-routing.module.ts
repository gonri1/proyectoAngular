import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FomularioComponent } from './components/fomulario/fomulario.component';
import { CartsComponent } from './components/carts/carts.component';
import { CarritoComponent } from './components/carrito/carrito.component';



const routes: Routes = [
  { path: 'home', component: InformacionComponent },
  { path: 'formulario', component: FomularioComponent },
  { path: 'productos/:categoria', component: ProductosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carts', component: CartsComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: 'home', },//redirecciona a /home si pones algo distinto en la url
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
