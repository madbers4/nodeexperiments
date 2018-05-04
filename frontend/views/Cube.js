/**
 * Created by CERN on 04.05.2018.
 */
module.exports = class {
    constructor() {
        this.$body = $('body');
        this.$cube = $('<div id="cube"></div>');
        console.log(this.$cube);
    }

    move(x, y) {
        if (x!==undefined) {
            this.$cube.css('top', x + 'px');
        }
        if (x!==undefined) {
            this.$cube.css('left', y + 'px');
        }
    }

    resize(width, height) {
        if (width!==undefined) {
           this.$cube.css('width', width + 'px');
       }
        if (height!==undefined) {
            this.$cube.css('height', height + 'px');
        }
    }

    respawn () {
        this.$body.append(this.$cube);
    }

    show() {
        this.$cube.show();
    }

    hide() {
        this.$cube.hide();
    }
};