import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FichaPacienteComponent } from './ficha.paciente/ficha.paciente.component';
import { CitaMedicaComponent } from './cita.medica/cita.medica.component';




@NgModule({
  declarations: [DashboardComponent, FichaPacienteComponent, CitaMedicaComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent,FichaPacienteComponent,CitaMedicaComponent]
})
export class PagesModule { }
