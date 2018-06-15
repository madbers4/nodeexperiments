/**
 * Created by CERN on 03.05.2018.
 */
let paths = {
    CurrentConnection : "CurrentConnection",
    Routes : "Routes",
    Exchanges : 'exchanges'
};

for (let [key, value] of Object.entries(paths)) {
    exports[key] = require('./' + value);
}