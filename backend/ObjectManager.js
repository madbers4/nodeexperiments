/**
 * Created by CERN on 03.05.2018.
 */
let Controllers = require('./controllers');
let Events = require('./events');
//require('./models');
//require('./views');

module.exports = class ObjectManager {
    constructor() {
        this.Controllers = require('./controllers');
        this.Events = require('./events');
//require('./models');
//require('./views');
        this.controllers = {};
        this.events = {};
        this.models = {};
        this.views = {};

        this.initControllers();
        this.initEvents();

        setTimeout(function () {
            console.log(this);
        }.bind(this), 0)
    }

    initControllers() {
        this.controllers.server = new this.Controllers.Server(this);
        this.controllers.router = new this.Controllers.Router(this);
    }

    initEvents () {
        this.events.server = new this.Events.Server(this);
    }
};