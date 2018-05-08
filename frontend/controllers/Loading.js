/**
 * Created by CERN on 04.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;
    }

    start () {
        this.parent.views.loading.show();
        this.parent.views.loading.$loading.click(this.parent.events.loading.onClick.bind(this.parent.events.loading));
    }
};