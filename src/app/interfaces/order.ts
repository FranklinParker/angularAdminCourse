import {OrderItem} from './orderItem';

export interface Order{
  id: number;
  name: string;
  email: string;
  created_at: Date;
  total: number;
  order_items: OrderItem[];
}
