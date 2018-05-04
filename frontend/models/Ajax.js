/**
 * Created by CERN on 04.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;
    }

    getHead (success, location) {
        $.ajax({
            dataType: "html",
            url: 'getHead',
            success: success.bind(location)
        });
    }
};