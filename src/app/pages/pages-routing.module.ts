import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthModule } from '../auth/auth.module';



const routes: Routes = [
  //rutas protegidad
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
    ]
  }
  //{path:'',redirectTo:'/dashboard',pathMatch:'full'},
  //{path:'**',component:NoFoundComponent},


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthModule,
  ]
})
export class PagesRoutingModule { }
