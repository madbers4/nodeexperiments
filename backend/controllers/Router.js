/**
 * Created by CERN on 03.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;
    }

    newRequest (req, res) {
        this.parent.views.frontendBuild.reloadFile();
        res.write(this.parent.views.frontendBuild.getData());
        res.end();
    }
};