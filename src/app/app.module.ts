import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { JugadoresDetailsComponent } from './componentes/jugadores/jugadores-details/jugadores-details.component';
import { JugadorUnicoComponent } from './componentes/jugadores/jugadores-details/jugador-unico/jugador-unico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormularioDetailComponent } from './componentes/formulario/formulario-detail/formulario-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    JugadoresComponent,
    NavBarComponent,
    JugadoresDetailsComponent,
    JugadorUnicoComponent,
    FormularioComponent,
    FormularioDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
