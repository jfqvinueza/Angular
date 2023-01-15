import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  constructor(
    /*private producthttp:ProductHttpService*/
    private http: HttpClient
    ) {}

  //metodo que se ejecuata despues del constructor
  ngOnInit(): void {
    this.getProduct();
    //this.postProduct();
    //this.putProduct();
    //this.upDateProduct();
    //this.deleteProduct();
  }



  getProduct() {
    const url = 'http://api.escuelajs.co/api/v1/products'
    const response = this.http.get(url).subscribe(response=>console.table(response))
  }



  //recupera un solo objeto
  postProduct() {

    const data = {
      title:"Libros",
      price:15,
      description:"utilez Escolares / Jimmy Vinueza",
      images:["https://www.bing.com/images/blob?bcid=sh3-c4QmFx4FQw"],
      categoryId:999
    };

    const url = 'https://api.escuelajs.co/api/v1/products'

    this.http.post(url, data).subscribe(response=>{console.log(response)})


  }



  putProduct() {
    const data = {
      title:"PUT PRODUCT ",
      price:907,
      description:"PUT PRODUCT / Jimmy Vinueza",

    };
    const url = 'https://api.escuelajs.co/api/v1/products/999'
    const response = this.http.put(url, data).subscribe(response=>console.log(response))

  }

  upDateProduct() {
    const data = {
      title:"GAMES",
      price:15,
      description:"WARZONE / Jimmy Vinueza UPDATE",
      images:["https://th.bing.com/th/id/R.00d06daad137141c6e44f55cd67e6a84?rik=kSj6NrybAOc9cQ&pid=ImgRaw&r=0"],
      categoryId:1
    };
    const url = 'https://api.escuelajs.co/api/v1/products/999'
    const response = this.http.put(url, data).subscribe(response=>console.log(response))

  }


  deleteProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products/999'
    const response = this.http.delete(url).subscribe(response=>console.log(response))
  }




}
