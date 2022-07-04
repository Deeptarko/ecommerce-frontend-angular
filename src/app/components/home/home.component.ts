import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productsArr: { id: number; name: String }[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productsArr.push({ id: 1, name: 'Pencil' });
    this.productsArr.push(
      { id: 1, name: 'Pencil' },
      { id: 2, name: 'Pen' },
      { id: 2, name: 'Pen' },
      { id: 2, name: 'Pen' },
      { id: 2, name: 'Pen' },
      { id: 2, name: 'Pen' },
      { id: 2, name: 'Pen' },
      { id: 2, name: 'Pen' },
      { id: 2, name: 'Pen' },
      { id: 2, name: 'Pen' }
    );
  }
}
