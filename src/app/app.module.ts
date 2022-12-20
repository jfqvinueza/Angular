import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoFoundPagesComponent } from './no-found-pages/no-found-pages.component';
import { SharedComponent } from './shared/shared.component';
import { AuthComponent } from './auth/auth.component';
import { LiginComponent } from './auth/ligin/ligin.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { NoFoundPageComponent } from './no-found-pages/no-found-page/no-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NoFoundPagesComponent,
    SharedComponent,
    AuthComponent,
    LiginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NoFoundPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
