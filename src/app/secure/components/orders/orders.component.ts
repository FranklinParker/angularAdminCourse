import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {OrderService} from '../../../services/order.service';
import {Order} from '../../../interfaces/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [
    trigger('tableState', [
      state('show', style({
        maxHeight: '150px'
      })),
      state('hide', style({
        maxHeight: 0
      })),
      transition('show => hide', animate('400ms ease-in')),
      transition('hide => show', animate('400ms ease-out')),
    ])
  ]
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  lastPage = 0;
  selectOrderId = -1;

  constructor(private orderService: OrderService) {
  }

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load(page = 1): Promise<void> {
    const {data, meta} = await this.orderService.all(page);
    this.orders = data;
    this.lastPage = meta.last_page;
    console.log('orders', this.orders);

  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.orderService.delete(id).subscribe(
        () => {
          this.orders = this.orders.filter(u => u.id !== id);
        }
      );
    }
  }

  onSelectViewOrder(id: number): void {
    this.selectOrderId = id === this.selectOrderId ? -1 : id;
  }

  itemState(id: number): string {
    return this.selectOrderId === id ? 'show' : 'hide';
  }

  export(): void {
    this.orderService.export().subscribe(
      res => {
        const blob = new Blob([res], {type: 'text/csv'});
        const downloadUrl = window.URL.createObjectURL(res);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'orders.csv';
        link.click();
      }
    );
  }
}
