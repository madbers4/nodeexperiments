/**
 * Created by CERN on 03.05.2018.
 */
module.exports = class {
    constructor(parent) {
        this.parent = parent;

        this.currentConnection = this.parent.models.currentConnection;
    }

    getMainPage(req, res) {
        this.currentConnection.setCurrentConnection(req, res);
        this.parent.controllers.pages.actionMainPage();
    }

    getExchangePage(req, res) {
        this.currentConnection.setCurrentConnection(req, res);
        this.parent.controllers.pages.actionExchangePage();
    }

    getTemplatesPage(req, res) {
        this.currentConnection.setCurrentConnection(req, res);
        this.parent.controllers.pages.actionTemplatesPage();
    }

    getSignInPage(req, res) {
        this.currentConnection.setCurrentConnection(req, res);
        this.parent.controllers.pages.actionSignInPage();
    }

};