import { Component, OnInit } from '@angular/core';
import { OrderResponse } from 'src/app/_models/orderResponse';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-admin-orders-page',
  templateUrl: './admin-orders-page.component.html',
  styleUrls: ['./admin-orders-page.component.css']
})
export class AdminOrdersPageComponent implements OnInit {

  ordersArr:OrderResponse[];
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((orders)=>{
      this.ordersArr=orders;
    })
  }

}
