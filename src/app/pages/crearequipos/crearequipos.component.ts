import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Dialog} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputText} from 'primeng/inputtext';
import {ButtonDirective} from 'primeng/button';
import {NgIf} from '@angular/common';

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
  directores: any[] = []; // Lista de directores
  mostrarModal: boolean = false; // Estado del modal

  constructor(private fb: FormBuilder) {
    // Inicialización de los formularios
    this.equipoForm = this.fb.group({
      nombreEquipo: ['', Validators.required],
      directorSeleccionado: [null, Validators.required],
    });

    this.directorForm = this.fb.group({
      nombre: ['', Validators.required],
      especialidad: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Simular la obtención de directores (puede ser desde un servicio)
    this.directores = [
      { id: 1, nombre: 'Juan Pérez', especialidad: 'Entrenador táctico' },
      { id: 2, nombre: 'Ana Gómez', especialidad: 'Preparador físico' },
    ];
  }

  mostrarModalDirector(): void {
    this.mostrarModal = true; // Mostrar el modal
  }

  guardarDirector(): void {
    if (this.directorForm.valid) {
      const nuevoDirector = {
        ...this.directorForm.value,
        id: this.directores.length + 1,
      };
      this.directores.push(nuevoDirector);

      // Resetear el formulario del director
      this.directorForm.reset();
      this.mostrarModal = false;
    }
  }

  guardarEquipo(): void {
    if (this.equipoForm.valid) {
      const equipo = {
        nombre: this.equipoForm.value.nombreEquipo,
        director: this.equipoForm.value.directorSeleccionado,
      };
      console.log('Equipo creado:', equipo);
      // Aquí podrías enviar el equipo a un servicio REST
      alert('¡Equipo creado con éxito!');
      this.equipoForm.reset(); // Resetear el formulario de equipo
    }
  }
}
