/**
 * Created by CERN on 03.05.2018.
 */
let socketIO = require("socket.io");
let nonce = 0;

class Connection {
    constructor() {
        this.id = nonce;
        nonce++;
        this.req = null;
        this.res = null;
    }
}

module.exports = class {
    constructor(parent) {
        this.parent = parent;

        this.connections = [];
        this.currentConnection = null;
    }

    addConnection(req, res) {
        let newConnection = new Connection(req, res);
        this.connections.push(newConnection);
        return newConnection;
    }

    findConnectionById(id) {
        for (let connection of this.connections) {
            if(connection.id === id) {
                return connection;
            }
        }
    }

    setCurrentConnection(req, res) {
        this.currentConnection = this.addConnection(req, res);
    }

    setCurrentConnectionById(id) {
        this.currentConnection = this.findConnectionById(id);
    }
};