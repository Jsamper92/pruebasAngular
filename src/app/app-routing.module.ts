import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent} from './componentes/index/index.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'jugadores', component: JugadoresComponent},
  {path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
