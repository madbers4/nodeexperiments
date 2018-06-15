/**
 * Created by CERN on 03.05.2018.
 */

module.exports = class {
    constructor(parent) {
        this.parent = parent;

        this.orders = [];
        this.tradehistory = [];

        this.bidName = 'bid';
        this.askName = 'ask';

        this.Order = parent.Models.Exchanges.Components.Order;
        this.TradeHistory = parent.Models.Exchanges.Components.TradeHistory;
    }

    pushOrder(price, amount, type, pair) {
        let newOrder = new this.Order();
        newOrder.price = price;
        newOrder.amount = amount;
        newOrder.type = type;
        newOrder.pair = pair;
        this.orders.push(newOrder);
    }

    pushTradeHistory(price, amount, type, pair, tid, timestamp) {
        let newTradeHistory = new this.Order();
        newTradeHistory.price = price;
        newTradeHistory.amount = amount;
        newTradeHistory.type = type;
        newTradeHistory.pair = pair;
        newTradeHistory.tid = tid;
        newTradeHistory.timestamp = timestamp;
        this.tradehistory.push(newTradeHistory);
    }

    onError(error) {
        console.log(error);
    }
};