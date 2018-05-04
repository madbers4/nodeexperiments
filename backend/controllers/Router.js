/**
 * Created by CERN on 03.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;

        this.url = require('url');
        this.routes = [
        ];
    }

    findRoute (path) {
        for (let route of this.routes) {
            console.log(route);
            if (path === route) {
                return route;
            }
        }
        return false;
    }

    newRequest (req, res) {
        let route = this.findRoute(this.url.parse(req.url).pathname);
        if (route) {
            if (route === this.routes[0]) {
            }
            res.end();
            return;
        }
        this.parent.views.frontendBuild.reloadFile();
        res.write(this.parent.views.frontendBuild.getData());
        res.end();
    }
};