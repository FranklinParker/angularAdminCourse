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
  lastPage = 1;
  constructor(private productService: ProductService) { }

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load(page= 1): Promise<void>{
    const {data, meta} = await this.productService.all(page);
    this.products = data;
    this.lastPage = meta.last_page;

  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.productService.delete(id).subscribe(
        () => {
          this.products = this.products.filter(u => u.id !== id);
        }
      );
    }
  }
}
