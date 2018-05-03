/**
 * Created by CERN on 03.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;

        this.http = require('http');
        this.port = 80;
    }

    newRequest (req, res) {
        res.write('Hello World!');
        res.end();
    }
};