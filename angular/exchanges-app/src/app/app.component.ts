import { Component } from '@angular/core';
import { OrdersService, Order, OrdersTableOptions } from "./orders.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OrdersService]
})
export class AppComponent {

  orders: Order[];
  buyOrders: Order[];
  sellOrders: Order[];

  buyOrdersTableOptions: OrdersTableOptions;
  sellOrdersTableOptions: OrdersTableOptions;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.buyOrdersTableOptions = {
      title: "Buy Orders",
      currency_1: "BTC",
      currency_2: "USD"
    };

    this.sellOrdersTableOptions = {
      title: "Sell Orders",
      currency_1: "BTC",
      currency_2: "USD"
    };

    setInterval(() => {
      this.ordersService.getOrders().subscribe(orders => {
        this.orders = orders;
        this.sortOrders();
      });
    }, 2000);
  }

  sortOrders() {
    let buyOrders = [];
    let sellOrders = [];
    for(let order of this.orders) {
      if (order.type == 'buy') {
        buyOrders.push(order);
      } else {
        sellOrders.push(order);
      }
    }
    this.sellOrders = sellOrders;
    this.buyOrders = buyOrders;
  }
}

