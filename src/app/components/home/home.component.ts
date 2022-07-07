import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productsArr: Product[] = [];
  name: string = '';
  category: string = '';
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((data) => {
      this.category = data['category'];
    });
  }

  ngOnInit(): void {
  
    if (this.category == null) {
      this.productService.getProducts().subscribe((product) => {
        console.log(product);
        this.productsArr = product;
      });
    }else{
      this.productService.getProductsByCategory(this.category).subscribe((product) => {
        console.log(product);
        this.productsArr = product;
      });
    }
  }
}
