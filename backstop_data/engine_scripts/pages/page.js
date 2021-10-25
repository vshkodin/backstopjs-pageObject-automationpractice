// page.js
//const conf = require('.conf')

module.exports = class Page {

    //to go to a URL
    open (page, path) {
        return page.goto('http://automationpractice.com/index.php' + path);
    }
}
