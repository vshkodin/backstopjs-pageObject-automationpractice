// Get username, password, base_url from virtual var
// user = process.env.USERNAME || "your_username",
// key = process.env.ACCESS_KEY || "your_accesskey",
// base_url = process.env.BASE_URL || "your_base_url",

exports.config = {
    //user,
    //key,
    //specs: [
    //    './test/specs/**/*.js'
    //],
    //exclude: [],

    // capabilities: [{
    //
    //     name: "Page Object Pattern",
    //     build: "PageObjectPattern",
    //     maxInstances: 5,
    //     browserName: 'chrome',
    //     version:"64.0",
    //     acceptInsecureCerts: true,
    //     network: true,
    //     video: true,
    //     visual: true,
    //     console: true,
    //
    // }],
    //
    // logFile : './logDir/api.log',
    // services: [
    //     ['lambdatest', {
    //         tunnel: true
    //     }]
    // ],
    // hostname: 'hub.lambdatest.com',
    // path: '/wd/hub',
    // port: 80,

    baseUrl: 'http://automationpractice.com/index.php',
    // maxInstances: 10,
    // logLevel: 'info',
    // bail: 0,
    //
    // waitforTimeout: 10000,
    // connectionRetryTimeout: 120000,
    // connectionRetryCount: 3,
    //
    // framework: 'mocha',
    // reporters: ['spec'],
    // mochaOpts: {
    //     ui: 'bdd',
    //     timeout: 60000
    // }
 }