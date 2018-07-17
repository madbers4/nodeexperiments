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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container row\">\n  <div class=\"col-md-6\">\n    <app-orders [options]=\"sellOrdersTableOptions\" [orders]=\"buyOrders\"></app-orders>\n  </div>\n  <div class=\"col-md-6\">\n    <app-orders [options]=\"buyOrdersTableOptions\" [orders]=\"sellOrders\"></app-orders>\n  </div>\n  <div class=\"col m 12\">\n    <app-trade-history></app-trade-history>\n  </div>\n</div>\n"

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
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        setInterval(function () {
            _this.ordersService.getOrders().subscribe(function (orders) {
                _this.orders = orders;
                _this.sortOrders();
            });
        }, 2000);
    };
    AppComponent.prototype.sortOrders = function () {
        var buyOrders = [];
        var sellOrders = [];
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var order = _a[_i];
            if (order.type == 'buy') {
                buyOrders.push(order);
            }
            else {
                sellOrders.push(order);
            }
        }
        this.sellOrders = sellOrders;
        this.buyOrders = buyOrders;
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
var trade_history_component_1 = __webpack_require__("./src/app/trade-history/trade-history.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var orders_component_1 = __webpack_require__("./src/app/orders/orders.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                trade_history_component_1.TradeHistoryComponent,
                orders_component_1.OrdersComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var OrdersService = /** @class */ (function () {
    function OrdersService(httpClient) {
        this.httpClient = httpClient;
        this.config = {
            "url": "/api/ex/wexnz/orders/btc_ucd"
        };
    }
    OrdersService.prototype.getOrders = function () {
        return this.httpClient.get(this.config.url, {
            observe: 'body'
        });
    };
    OrdersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;


/***/ }),

/***/ "./src/app/orders/orders.component.css":
/***/ (function(module, exports) {

module.exports = "div {\r\n  overflow-y: auto;\r\n  max-height: 780px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{options.title}}</h2>\n<div>\n  <table class=\"table table-striped table-bordered\">\n    <thead>\n    <tr>\n      <th>Price</th>\n      <th>{{options.currency_1}}</th>\n      <th>{{options.currency_2}}</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let order of orders\">\n      <td>{{order.price}}</td>\n      <td>{{order.amount}}</td>\n      <td>{{order.price*order.amount}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
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
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OrdersComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], OrdersComponent.prototype, "orders", void 0);
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'app-orders',
            template: __webpack_require__("./src/app/orders/orders.component.html"),
            styles: [__webpack_require__("./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;


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