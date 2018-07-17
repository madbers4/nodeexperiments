/**
 * Created by CERN on 03.05.2018.
 */
let Exchange = require('./components/Exchange');
let request = require('request-promise');


module.exports = class extends Exchange {
    constructor(parent) {
        super(parent);

        this.parent = parent;

        this.urlToPublicApi = 'https://wex.nz/api/3/';
        this.urlToInfo = 'info';
        this.urlToTicker = 'info';
        this.urlToDepth = 'depth';
        this.urlToTrades = 'trades';

        this.pairs = [
            'btc_usd'
        ];
    }

    getOrders() {
        let options = {
            method: 'GET',
            uri: this.urlToPublicApi + this.urlToDepth + '/' + 'btc_usd',
            json: true
        };
        request(options)
            .then(this.onGetOrders.bind(this))
            .catch(this.onError);
    }

    getPairsTransfersForUrl() {
        let pairsTransfers = null;
        let Isfirst = true;
        for (let pair of this.pairs) {
            if (Isfirst) {
                pairsTransfers = pair;
                Isfirst = null;
            } else {
                pairsTransfers = pairsTransfers + '-' + pair;
            }
        }
        return pairsTransfers;
    }

    onGetOrders(data) {
        this.orders = [];
        for (let pair of this.pairs) {
            if (data[pair]) {
                if (data[pair]['asks']) {
                    for (let order of data[pair]['asks']) {
                        this.pushOrder(order[0], order[1], "buy", pair);
                    }
                }
                if (data[pair]['bids']) {
                    for (let order of data[pair]['bids']) {
                        this.pushOrder(order[0], order[1], "sell", pair);
                    }
                }
            }
        }
    }


};