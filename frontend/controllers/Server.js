/**
 * Created by CERN on 03.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;

        this.http = require('http');
        this.port = 80;
    }

    start () {
        console.log('Start Server...');
        this.http.createServer(this.parent.events.server.onNewRequest.bind(this)).listen(this.port);
    }

    newRequest (req, res) {
        res.write('Hello World!');
        res.end();
    }
};