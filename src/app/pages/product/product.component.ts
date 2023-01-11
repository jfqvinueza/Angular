import { Component, OnInit } from '@angular/core';

import {HttpClient , HttpRequest, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.get();
    this.post();
  }

  get() {
    const response = this.http.get('api.escuelajs.co/api/v1/products').subscribe(response=>console.log(response))
  }

  post() {

    const data = {
      tittle:"Libros",
      price:15,
      description:"utilez Escolares / Jimmy Vinueza",
      categoryId:1
    };

    const response = this.http.get('api.escuelajs.co/api/v1/products').subscribe(response=>console.log(response))
  }
/*
  put(url, body, headers?) {
    return this.http.put(url, body, {headers});
  }

  delete(url, headers?) {
    return this.http.delete(url, {headers});
  }

  */


}
