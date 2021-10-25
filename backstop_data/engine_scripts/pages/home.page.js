//home.page.js

const Page = require ('./page');

class HomePage extends Page{

    //page locators:
        get signInButton() { return ('[class="login"]') }
        get dashboardHeader() { return ('[class="img-responsive"]') }


    //page actions:
       // open Login Page
        async gotoSignIn (page) {
           //return await page.click(this.signInButton);
           await page.click(this.signInButton);
        }

        //to verify user is in dashboard page
        async isDashboardHeaderExist () {
          //return await this.dashboardHeader.isDisplayed();
          await this.dashboardHeader.isDisplayed();
        }

    }
module.exports = new HomePage();