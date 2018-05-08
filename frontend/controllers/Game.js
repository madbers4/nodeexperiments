/**
 * Created by CERN on 08.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;
        this.gameObjects = [];
    }

    start () {
        this.parent.views.mainMenu.show();
    }
};