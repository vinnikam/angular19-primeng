import { Routes } from '@angular/router';
import {ListadoequiposComponent} from './pages/listadoequipos/listadoequipos.component';
import {CrearequiposComponent} from './pages/crearequipos/crearequipos.component';

export const routes: Routes = [
  { path: '', component: ListadoequiposComponent },
  { path: 'listar', component: ListadoequiposComponent },
  { path: 'crear', component: CrearequiposComponent },
];
