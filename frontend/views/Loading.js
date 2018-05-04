/**
 * Created by CERN on 04.05.2018.
 */
module.exports = class {
    constructor() {
        this.$body = $('body');
        this.words = ["LOADING", "TEST", "CODE", "ARRAY", "INTEGER", "FLOAT", "LUCK", "GIT", "JS", "CSS", "NODE", "EXPERIMENTS", "ORGANIZATION"];
        this.stop = false;
    }

    getData() {
    }

    show() {
        this.$body.append(`
<div id="loading">
    <div class="right">
        <h4 class="randoms"></h4>
        <h1 class="randoms"></h1>
        <h4 class="randoms"></h4>
    </div>
    <div class="left">
        <h4 class="randoms"></h4>
        <h1 class="randoms"></h1>
        <h4 class="randoms"></h4>
    </div>
</div>`);
        this.$loading = $('#loading');
        let randoms = window.document.getElementsByClassName("randoms");
        for (let i = 0; i < randoms.length; i++) {
            this.changeWord(randoms[i]);
        }
        this.$loading.show('slow');
    }

    hide() {
        this.$loading.hide('slow');
        this.stop = true;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    changeWord(a) {
        a.style.opacity = '0.1';
        a.innerHTML = this.words[this.getRandomInt(0, this.words.length - 1)];
        setTimeout(function () {
            a.style.opacity = '1';
        }.bind(this), 425);
        if (!this.stop) {
            setTimeout(function () {
                this.changeWord(a);
            }.bind(this), this.getRandomInt(500, 800));
        }
    }
};