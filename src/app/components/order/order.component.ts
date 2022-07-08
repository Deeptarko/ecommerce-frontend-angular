import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderRequest } from 'src/app/_models/orderRequest';
import { OrderResponse } from 'src/app/_models/orderResponse';
import { Product } from 'src/app/_models/product';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  product: Product;
  currentLoggedInUser: User;
  order: OrderRequest;
  constructor(
    private orderService: OrderService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.currentLoggedInUser = this.authenticationService.userValue;

    this.product = this.orderService.currentOrderDetails;
  }

  saveOrder(form: NgForm) {
    console.log(form);
    this.order = {
      amount: form.value.amount,
      shippingAddress: form.value.address,
      orderStatus: 'PLACED',
      quantity: form.value.quantity,
      username: 'deep6104',
      productId: form.value.productId,
    };
    this.orderService.saveOrder(this.order).subscribe((response) => {
      console.log(response);
    });
  }
}
