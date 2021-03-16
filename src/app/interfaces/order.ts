import {OrderItem} from './orderItem';

export interface Order{
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date;
  total: number;
  order_items: OrderItem[];
}