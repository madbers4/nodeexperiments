import { Component } from '@angular/core';
import { OrdersService } from "./orders.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OrdersService]
})
export class AppComponent {

  orders = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    //this.orders = this.ordersService.orders
    this.orders = this.ordersService.getUsers();
  }
}
