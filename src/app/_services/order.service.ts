import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderRequest } from '../_models/orderRequest';
import { OrderResponse } from '../_models/orderResponse';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  currentOrderDetails:Product;
  constructor(private http:HttpClient) { 

  }

  //Get All Orders
  getAllOrders():Observable<OrderResponse[]>{
    return this.http.get<OrderResponse[]>('http://localhost:9000/api/order/orders');
  }

  //Save Order

  saveOrder(order:OrderRequest):Observable<string>{
    return this.http.post<string>(`http://localhost:9000/api/order/save`,order,this.httpOptions);
  }
}
