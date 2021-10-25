//login.page.js
 
const Page = require ('./page');
 
class LoginPage extends Page {

     //page locators:
        get inputUsername() { return ('[id="email"]') }
        get inputPassword() { return ('[id="passwd"]') }
        get loginBtn() { return ('[id="SubmitLogin"]') }

     //page actions:
        //to open a URL
        async open () {
            await super.open('/')
        }

     //to enter username and password into login form and click login button
        async login (page, username, password) {
            await page.waitForTimeout(6000);
            //await page.type(this.inputUsername, username);
            //await page.type(this.inputPassword, password);
            await page.click(this.loginBtn);
        }
    }
 
module.exports = new LoginPage();