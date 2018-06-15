import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-orders',
  templateUrl: './sell-orders.component.html',
  styleUrls: ['./sell-orders.component.css']
})

export class SellOrdersComponent implements OnInit {

  sellOrders = [
    {
      price: 6700,
      currency_1: 0.01,
      currency_2: 76
    },
    {
      price: 5700,
      currency_1: 0.11,
      currency_2: 77
    },
    {
      price: 676500,
      currency_1: 0.01,
      currency_2: 76
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}
