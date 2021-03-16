import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load(page= 1): Promise<void>{
    const {data, meta} = await this.productService.all(1);
    this.products = data;

  }

  delete(id: number): void {

  }
}
