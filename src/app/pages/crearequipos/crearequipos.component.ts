import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Dialog} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputText} from 'primeng/inputtext';
import {ButtonDirective} from 'primeng/button';
import {NgIf} from '@angular/common';
import {DirectoresService} from '../../servicios/directores.service';
import {EquiposService} from '../../servicios/equiposservicio.service';
import {DirectorTecnico} from '../../model/director-tecnico';

@Component({
  selector: 'app-crearequipos',
  imports: [
    FormsModule,
    Dialog,
    DropdownModule,
    InputText,
    ButtonDirective,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './crearequipos.component.html',
  styleUrl: './crearequipos.component.css'
})
export class CrearequiposComponent implements OnInit {
  equipoForm: FormGroup; // Formulario para el equipo
  directorForm: FormGroup; // Formulario para el director
  directores: DirectorTecnico[] = []; // Lista de directores
  mostrarModal: boolean = false; // Estado del modal
  director!:DirectorTecnico;

  constructor(private fb: FormBuilder,
              private directorService: DirectoresService,
              private equipoService: EquiposService) {
    this.equipoForm = this.fb.group({
      nombreEquipo: ['', Validators.required],
      nombreCorto: ['', Validators.required],
      directorSeleccionado: [null, Validators.required],
    });

    this.directorForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      nacionalidad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Simular la obtención de directores (puede ser desde un servicio)
    this.obtenerDirectores();
  }

  mostrarModalDirector(): void {
    this.mostrarModal = true; // Mostrar el modal
  }

  guardarDirector(): void {
    if (this.directorForm.valid) {
      this.director = {
        nombreCompleto : this.directorForm.value.nombreCompleto,
        nacionalidad: this.directorForm.value.nacionalidad,
        disponible: true
      }
      this.directorService.create(this.director ).subscribe({
        next: (data) => {
          this.directores.push(this.director);
        }, error: (error) => {
          console.error('No guardo el director', error);
        },
      });
    }

    // Resetear el formulario del director
    this.directorForm.reset();
    this.mostrarModal = false;
    }


  guardarEquipo(): void {
    if (this.equipoForm.valid) {

      const equipo = {
        nombre: this.equipoForm.value.nombreEquipo,
        nombreCorto: this.equipoForm.value.nombreCorto,
        directorTecnico: this.equipoForm.value.directorSeleccionado,
      };
      this.equipoService.create(equipo).subscribe({
        next: (data) => {
          alert('Equipo creado ')
        }, error: (error) => {
          console.error('No guardo el equipo', error);
        },
      });
      this.equipoForm.reset(); // Resetear el formulario de equipo
    }
  }

  obtenerDirectores() {
      this.directorService.getList().subscribe({
        next: (data) => {
          this.directores = data
        }, error: (error) => {
          console.error('No hay directores', error);
        },
      })
    }
}
