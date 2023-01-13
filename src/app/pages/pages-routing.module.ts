import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthModule } from '../auth/auth.module';
import { CitaMedicaComponent } from './cita.medica/cita.medica.component';
import { FichaPacienteComponent } from './ficha.paciente/ficha.paciente.component';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
      { path:'', component: DashboardComponent },
      { path: 'ficha', component: FichaPacienteComponent },
      { path: 'citaMedica', component: CitaMedicaComponent }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesRoutingModule { }