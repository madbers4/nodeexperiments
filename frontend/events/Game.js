/**
 * Created by CERN on 04.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;

        this.fps = 60;
    }

    engineOn() {
        setInterval(this.timer.bind(this), 1000/this.fps);
    }

    gameEventsOn() {
        $('html').on('click', this.onClick.bind(this));
    }

    timer (data) {
        this.parent.controllers.game.loop();
    }

    onClick () {
        this.parent.controllers.game.onClick();
    }
};