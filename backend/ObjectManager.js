/**
 * Created by CERN on 03.05.2018.
 */

module.exports = class ObjectManager {
    constructor() {

        this.Controllers = require('./controllers');
        this.Events = require('./events');
        this.Views = require('./views');
        this.Models = require('./models');

        this.controllers = {};
        this.events = {};
        this.models = {};
        this.views = {};

        this.initModels();
        this.initViews();
        this.initControllers();
        this.initEvents();
    }

    initControllers() {
        this.controllers.server = new this.Controllers.Server(this);
        this.controllers.pages = new this.Controllers.Pages(this);
    }

    initEvents () {
        this.events.server = new this.Events.Server(this);
    }

    initViews () {
    }

    initModels () {
        this.models.currentConnection = new this.Models.CurrentConnection(this);
        this.models.routes = new this.Models.Routes(this);
    }
};