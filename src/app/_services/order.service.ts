import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderResponse } from '../_models/orderResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { 

  }

  //Get All Orders
  getAllOrders():Observable<OrderResponse[]>{
    return this.http.get<OrderResponse[]>('http://localhost:9000/api/order/orders');
  }
}
