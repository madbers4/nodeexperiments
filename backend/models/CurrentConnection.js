/**
 * Created by CERN on 03.05.2018.
 */
module.exports = class {
    constructor(parent) {
        this.parent = parent;

        this.req = null;
        this.res = null;
    }

    setCurrentConnection(req, res) {
        this.req = req;
        this.res = res;
    }
};