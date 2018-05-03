/**
 * Created by CERN on 03.05.2018.
 */
module.exports = class {
    constructor () {
        let fs = require("fs");
        this.data = fs.readFileSync('./web/index.js', 'utf8');
    }
    getData () {
        return '<script type="text/javascript">' + this.data + '</script>';
    }

    reloadFile () {
        let fs = require("fs");
        this.data = fs.readFileSync('./web/index.js', 'utf8');
    }
};