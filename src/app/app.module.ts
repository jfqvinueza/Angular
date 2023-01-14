import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        PagesComponent,
        NoFoundComponent
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
      AppRoutingModule,
        PagesModule,
      SharedModule,
        AuthModule,
        HttpClientModule
    ]
})
export class AppModule {}
