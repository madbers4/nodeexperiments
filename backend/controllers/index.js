/**
 * Created by CERN on 03.05.2018.
 */
let paths = {
    Server : "Server",
};

for (let [key, value] of Object.entries(paths)) {
    exports[key] = require('./' + value);
}