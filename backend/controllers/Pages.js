let jade = require('jade');
let path = require('path');

module.exports = class {
    constructor(parent) {
        this.parent = parent;

        this.routes = this.parent.models.routes;

        this.cc = parent.models.currentConnection;

        this.staticHtml = {};

        this.viewsDir = './backend/views';

        this.staticJade = {
            'index.jade': 'index',
            'exchange.jade' : 'exchange'
        };
        this.renderJadeFiles();
    }

    actionMainPage() {
        this.cc.res.send(this.staticHtml.index);
        this.cc.res.end();
    }

    actionExchangePage() {
        this.cc.res.send(this.staticHtml.exchange);
        this.cc.res.end();
    }

    actionTemplatesPage() {
        this.cc.res.send(this.staticHtml.index);
        this.cc.res.end();
    }

    actionSignInPage() {
        this.cc.res.send(this.staticHtml.index);
        this.cc.res.end();
    }

    renderJadeFiles() {
        for (let [key, value] of Object.entries(this.staticJade)) {
            this.staticHtml[value] = this.renderJadeFile(key);
        }
    }

    renderJadeFile(filename) {
        let file;
        let routeToJadeDir = this.viewsDir;

        jade.renderFile(path.join(routeToJadeDir, filename), {},
            function (err, html) {
                if (!err) {
                    file = html;
                } else {
                    console.log(err);
                }
            }.bind(this));

        return file;
    }
};