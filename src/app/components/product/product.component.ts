import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/_models/product';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:Product;

  constructor(private router:Router,private orderService:OrderService) { }

  ngOnInit(): void {
  }

  navigateToOrderPage(){
    this.orderService.currentOrderDetails=this.product;
    this.router.navigateByUrl("/home/order");

  }

}
