/**
 * Created by CERN on 03.05.2018.
 */

module.exports = class {
    constructor(parent) {
        this.parent = parent;
        this.cc = parent.models.currentConnection;

        this.exchanges = {
            wexnz: this.setWexnz()
        };
    }

    setWexnz() {
        //console.log(this.parent);
        let exWexnz = new this.parent.Models.Exchanges.Wexnz(this.parent);
        exWexnz.getOrders();

        setInterval(function () {
            exWexnz.getOrders();
        }.bind(this), 2000);
        return exWexnz;
    }

    actionGetOrders() {
        let exchange = this.findExchange(this.cc.req.param('exchange'));

        this.cc.res.json(exchange.orders);
        this.cc.res.end();
    }

    actionGetSellOrders() {

    }

    actionGetBuyOrders() {

    }

    actionGetTradeHistory() {

    }

    findExchange(exchangeName) {
        if (this.exchanges[exchangeName]) {
            return this.exchanges[exchangeName];
        } else {
            this.cc.res.send('Exchange not found');
            this.cc.res.end();
            return false;
        }
    }

};