/**
 * Created by CERN on 03.05.2018.
 */
// ROUTES TYPES:
// 1: GET
// 2: POST
// 3: PUT
// 4: DELETE
let express = require('express');

module.exports = class {
    constructor(parent) {
        this.parent = parent;

        this.publicDir = './public';

        setTimeout(function () {
            this.GETRoutes = {
                '/': {
                    'url': '/',
                    'method': this.parent.events.server.getMainPage,
                    'bindTo': this.parent.events.server
                },
                '/exchange/': {
                    'url': '/exchange/',
                    'method': this.parent.events.server.getExchangePage,
                    'bindTo': this.parent.events.server
                },
                '/templates/': {
                    'url': '/templates/',
                    'method': this.parent.events.server.getTemplatesPage,
                    'bindTo': this.parent.events.server
                },
                '/sign_in/': {
                    'url': '/sign_in/',
                    'method': this.parent.events.server.getSignInPage,
                    'bindTo': this.parent.events.server
                },
                '/api/ex/': {
                    'url': '/api/ex/:exchange/orders/:pairs',
                    'method': this.parent.events.server.getExchangeOrders,
                    'bindTo': this.parent.events.server
                },
            };
            this.POSTRoutes = {};
            this.PUTRoutes = {};
            this.DELETERoutes = {};
        }.bind(this), 0);
    }

    getExpressRoutes() {
        let router = express.Router();

        this.putInExpressRouterObjRoutesByMethod(router.get.bind(router), this.GETRoutes);
        this.putInExpressRouterObjRoutesByMethod(router.post.bind(router), this.POSTRoutes);
        this.putInExpressRouterObjRoutesByMethod(router.put.bind(router), this.PUTRoutes);
        this.putInExpressRouterObjRoutesByMethod(router.delete.bind(router), this.DELETERoutes);

        return router;
    }

    putInExpressRouterObjRoutesByMethod(method, routes) {
        for (let route in routes) {
            if (routes[route].bindTo) {
                method(routes[route].url, routes[route].method.bind(routes[route].bindTo));
            } else {
                method(routes[route].url, routes[route].method);
            }
        }
    }
};