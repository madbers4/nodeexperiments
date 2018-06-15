import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OrdersService {

  orders = [];

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('/api/ex/wexnz/orders/btc_ucd');
  }

}
