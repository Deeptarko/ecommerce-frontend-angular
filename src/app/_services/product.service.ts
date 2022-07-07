import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


  productsArr:{id:number,name:string}[]=[];

  constructor(private http:HttpClient) { }

  //Get All The Products
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:9000/api/product/products`);
  }
  
  //Get All The Products By Category
  getProductsByCategory(category:string):Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:9000/api/product/category/${category}`);
  }

  //Delete Products

  deleteProduct(productId:number):any{
    return this.http.delete('')
  }

  //Update Products


  





}
