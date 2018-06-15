import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuyOrdersComponent } from './buy-orders/buy-orders.component';
import { SellOrdersComponent } from './sell-orders/sell-orders.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    BuyOrdersComponent,
    SellOrdersComponent,
    TradeHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
