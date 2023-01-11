import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

@Injectable({
  providedIn: 'root'
})
export class ProductModule {
  private API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  get(path: string) {
    const responce = this.http.get('http://example.com').subscribe(response => {console.log(response)})
  }
  
  post(path: string, body: any) {

    /*
const data = {
  tittle:"libros",
  price:65,
  descripcion: "utiles escolares / Jimmy VInueza",
  categoryId:1
} 
*/

   return this.http.post(`${this.API_URL}/${path}`, body);
  }

  put(path: string, body: any) {
    return this.http.put(`${this.API_URL}/${path}`, body);
  }

  delete(path: string) {
    return this.http.delete(`${this.API_URL}/${path}`);
  }
}
 
