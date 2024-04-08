import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FomularioComponent } from './components/fomulario/fomulario.component';
import { FormsModule } from '@angular/forms';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { CartsComponent } from './components/carts/carts.component';
import { DatosapiService } from './service/datosapi.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceBolPipe } from './pipes/service-bol.pipe';
import { CarritoComponent } from './components/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    FomularioComponent,
    SeleccionComponent,
    InformacionComponent,
    ProductosComponent,
    ImagenesPipe,
    CartsComponent,
    ServiceBolPipe,
    CarritoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [ provideClientHydration(),DatosapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
