import { Routes } from '@angular/router';
import {ListadoequiposComponent} from './pages/listadoequipos/listadoequipos.component';

export const routes: Routes = [
  { path: '', component: ListadoequiposComponent },
  { path: 'listar', component: ListadoequiposComponent },
];
