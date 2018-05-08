/**
 * Created by CERN on 08.05.2018.
 */
/**
 * Created by CERN on 04.05.2018.
 */
module.exports = class {
    constructor() {
        this.$body = $('body');
        this.$mainMenu = $('<div class="mainMenu row"></div>');
        this.buttons = {};
        this.$div1 = $('<div class="text-center"></div>');
        this.buttons.startGame = $('<button class="btn btn-danger">Start the Game</button>');

    }

    show() {
        this.$body.append(this.$mainMenu);
        this.$mainMenu.append(this.$div1);
        this.$div1.append(this.buttons.startGame);
    }

    hide() {
        this.$mainMenu.hide("slow");
    }
};