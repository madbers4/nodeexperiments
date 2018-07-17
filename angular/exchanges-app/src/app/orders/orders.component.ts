import { Component, OnInit, Input } from '@angular/core';
import {Order, OrdersTableOptions} from "../orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input() options: OrdersTableOptions;
  @Input() orders: Order[];

  constructor() { }

  ngOnInit() {
  }

}
