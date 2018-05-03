/**
 * Created by CERN on 03.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;

        setTimeout(this.onLoad.bind(this), 0);
    }

    onLoad () {
        this.parent.controllers.server.start()
    }

    onNewRequest (req, res) {
        this.parent.controllers.server.newRequest(req, res);
    }
};