/**
 * Created by CERN on 04.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;
    }

    onGetHead (data) {
        this.parent.controllers.loading.showHead(data);
    }
};