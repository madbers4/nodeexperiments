/**
 * Created by CERN on 03.05.2018.
 */

module.exports = class ObjectManager {
    constructor() {
        this.Controllers = require('./controllers');
        this.Events = require('./events');
        this.Models = require('./models');
        this.Views = require('./views');

        this.controllers = {};
        this.events = {};
        this.models = {};
        this.views = {};

        this.initModels();
        this.initControllers();
        this.initEvents();
        this.initViews();

        setTimeout(function () {
            this.controllers.loading.start();
            this.controllers.game.start();
        }.bind(this), 0)
    }

    initControllers() {
        this.controllers.loading = new this.Controllers.Loading(this);
        this.controllers.game = new this.Controllers.Game(this);
    }

    initEvents () {
        this.events.loading = new this.Events.Loading(this);
    }

    initModels () {
        this.models.ajax = new this.Models.Ajax();
    }

    initViews () {
        this.views.loading = new this.Views.Loading();
        this.views.mainMenu = new this.Views.MainMenu();
    }
};