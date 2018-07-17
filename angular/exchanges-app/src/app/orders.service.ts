import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

export interface Order {
  price: number,
  amount: number,
  type: string,
  pair: string
}

export interface OrdersTableOptions {
  title: string,
  currency_1: string,
  currency_2: string
}


@Injectable()
export class OrdersService {
  config = {
    "url": "/api/ex/wexnz/orders/btc_ucd"
  };

  constructor(private httpClient: HttpClient) { }

  getOrders(): any {
    return this.httpClient.get<Order[]>(this.config.url, {
      observe: 'body'
    });
  }
}
