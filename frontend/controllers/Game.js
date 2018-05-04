/**
 * Created by CERN on 04.05.2018.
 */
module.exports = class {
    constructor (parent) {
        this.parent = parent;
        this.gameObjects = {};

        this.createACube('Cube_001');
        parent.events.game.engineOn();
        parent.events.game.gameEventsOn();
    }

    start () {
        this.showCube('Cube_001');
    }

    createACube(cubeName) {
        this.gameObjects[cubeName] = {};
        this.gameObjects[cubeName].parameters = new this.parent.Models.Cube();
        let paramaters = this.gameObjects[cubeName].parameters;
        this.gameObjects[cubeName].view = new this.parent.Views.Cube();
        let view = this.gameObjects[cubeName].view;
        view.resize(paramaters.width, paramaters.height);
        view.move(paramaters.x, paramaters.y);
    }

    showCube(cubeName) {
        this.gameObjects[cubeName].view.respawn();
    }

    loop() {
        let lupnum = 0;
        console.log(lupnum);
    }

    onClick() {
        console.log(event.clientX);
        console.log(event.clientY);
    }
};