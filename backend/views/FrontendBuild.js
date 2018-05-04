/**
 * Created by CERN on 03.05.2018.
 */
module.exports = class {
    constructor() {
        this.css = [
            'bootstrap',
            'loading',
            'cube'
        ];
        this.js = [
            './web/index.js'
        ];
        this.cdn = [
        ];
        this.reloadFile();
    }

    getData() {
        return this.html;
    }

    reloadFile() {
        this.head = '<head>' + this.createHeadPackage() + '</head>';
        this.footer = '<footer>' + this.createFooterPackage() + '</footer>';
        this.html = '<!DOCTYPE html><html>' + this.head + '<body>' + this.footer + '</body></html>';
    }

    loadCss(file) {
        return '<style type="text/css">' + this.loadFile('./dist/css/' + file + '.css') + '</style>';
    }

    loadJs(file) {
        return '<script type="text/javascript">' + this.loadFile(file) + '</script>';
    }

    getCdnUrl(src) {
        return '<script src="' + src + '"></script>';
    }

    loadFile(file) {
        let fs = require("fs");
        return fs.readFileSync(file, 'utf8');
    }

    createHeadPackage() {
        let package_ = '';
        for (let file of this.css) {
            package_ += this.loadCss(file);
        }
        for (let src of this.cdn) {
            package_ += this.getCdnUrl(src);
        }
        return package_;
    }

    createFooterPackage() {
        let package_ = '';
        for (let file of this.js) {
            package_ += this.loadJs(file);
        }
        return package_;
    }
};