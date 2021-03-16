import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service';
import { Order } from '../../../interfaces/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  lastPage = 0;

  constructor(private orderService: OrderService) { }

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load(page= 1): Promise<void>{
    const {data, meta} = await this.orderService.all(page);
    this.orders = data;
    this.lastPage = meta.last_page;
    console.log('orders', this.orders);

  }
  delete(id: number): void {
  }
}
