import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {Equipo} from '../../model/equipo';
import * as console from 'node:console';
import {EquiposService} from '../../servicios/equiposservicio.service';

@Component({
  selector: 'app-listadoequipos',
  imports: [
    TableModule
  ],
  templateUrl: './listadoequipos.component.html',
  styleUrl: './listadoequipos.component.css'
})
export class ListadoequiposComponent implements OnInit{
  equipos: Equipo[] = []

  constructor(private equiposService: EquiposService) {

  }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.equiposService.getList().subscribe({
      next: (data) => {
        this.equipos = data
      }, error: (error) => {
        console.error('No hay equipos', error);
      },
    })
  }

}
