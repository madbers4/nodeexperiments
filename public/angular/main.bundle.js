webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container row\">\n  <div class=\"col m 6\">\n    <app-buy-orders></app-buy-orders>\n  </div>\n  <div class=\"col m 6\">\n    <app-sell-orders></app-sell-orders>\n  </div>\n  <div class=\"col m 12\">\n    <app-trade-history></app-trade-history>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var orders_service_1 = __webpack_require__("./src/app/orders.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(ordersService) {
        this.ordersService = ordersService;
        this.orders = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.orders = this.ordersService.orders
        this.orders = this.ordersService.getUsers();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [orders_service_1.OrdersService]
        }),
        __metadata("design:paramtypes", [orders_service_1.OrdersService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var buy_orders_component_1 = __webpack_require__("./src/app/buy-orders/buy-orders.component.ts");
var sell_orders_component_1 = __webpack_require__("./src/app/sell-orders/sell-orders.component.ts");
var trade_history_component_1 = __webpack_require__("./src/app/trade-history/trade-history.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                buy_orders_component_1.BuyOrdersComponent,
                sell_orders_component_1.SellOrdersComponent,
                trade_history_component_1.TradeHistoryComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/buy-orders/buy-orders.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/buy-orders/buy-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Buy Orders</h2>\n<table class=\"table table-striped table-bordered\">\n  <thead>\n  <tr>\n    <th>Price</th>\n    <th>BTC</th>\n    <th>USD</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>Loading...</tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/buy-orders/buy-orders.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BuyOrdersComponent = /** @class */ (function () {
    function BuyOrdersComponent() {
    }
    BuyOrdersComponent.prototype.ngOnInit = function () {
    };
    BuyOrdersComponent = __decorate([
        core_1.Component({
            selector: 'app-buy-orders',
            template: __webpack_require__("./src/app/buy-orders/buy-orders.component.html"),
            styles: [__webpack_require__("./src/app/buy-orders/buy-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuyOrdersComponent);
    return BuyOrdersComponent;
}());
exports.BuyOrdersComponent = BuyOrdersComponent;


/***/ }),

/***/ "./src/app/orders.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
        this.orders = [];
    }
    OrdersService.prototype.getUsers = function () {
        return this.http.get('/api/ex/wexnz/orders/btc_ucd');
    };
    OrdersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;


/***/ }),

/***/ "./src/app/sell-orders/sell-orders.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sell-orders/sell-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Sell Orders</h2>\n<table class=\"table table-striped table-bordered\">\n  <thead>\n  <tr>\n    <th>Price</th>\n    <th>BTC</th>\n    <th>USD</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let order of sellOrders\">\n    <td>{{order.price}}</td>\n    <td>{{order.currency_1}}</td>\n    <td>{{order.currency_2}}</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/sell-orders/sell-orders.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SellOrdersComponent = /** @class */ (function () {
    function SellOrdersComponent() {
        this.sellOrders = [
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
    }
    SellOrdersComponent.prototype.ngOnInit = function () {
    };
    SellOrdersComponent = __decorate([
        core_1.Component({
            selector: 'app-sell-orders',
            template: __webpack_require__("./src/app/sell-orders/sell-orders.component.html"),
            styles: [__webpack_require__("./src/app/sell-orders/sell-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SellOrdersComponent);
    return SellOrdersComponent;
}());
exports.SellOrdersComponent = SellOrdersComponent;


/***/ }),

/***/ "./src/app/trade-history/trade-history.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trade-history/trade-history.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Trade history</h2>\n<table class=\"table table-striped table-bordered\">\n  <thead>\n  <tr>\n    <th>Date</th>\n    <th>Type</th>\n    <th>Price</th>\n    <th>Amount (BTC)</th>\n    <th>Total (USD)</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>Loading...</tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/trade-history/trade-history.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TradeHistoryComponent = /** @class */ (function () {
    function TradeHistoryComponent() {
    }
    TradeHistoryComponent.prototype.ngOnInit = function () {
    };
    TradeHistoryComponent = __decorate([
        core_1.Component({
            selector: 'app-trade-history',
            template: __webpack_require__("./src/app/trade-history/trade-history.component.html"),
            styles: [__webpack_require__("./src/app/trade-history/trade-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TradeHistoryComponent);
    return TradeHistoryComponent;
}());
exports.TradeHistoryComponent = TradeHistoryComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map