/**
 * Created by CERN on 03.05.2018.
 */
let express = require('express');
let path = require('path');
let createError = require('http-errors');

module.exports = class {
    constructor(parent) {
        this.parent = parent;
        this.app = express();
        this.port = 80;
        this.host = '127.0.0.9';

        this.routes = parent.models.routes;

        setTimeout(function () {
            this.setSettings();
            this.app.listen(this.port);
        }.bind(this), 0);
    }

    setSettings() {
        this.app.set('views', this.routes.viewsDir);
        this.app.set('view engine', 'jade');
        this.app.use(express.static(this.routes.publicDir));
        this.app.use('/', this.routes.getExpressRoutes());
    }
};