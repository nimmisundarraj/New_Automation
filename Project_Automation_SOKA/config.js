var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = 
{
//    seleniumAddress: 'http://localhost:4444/wd/hub',  //The address of a running selenium server.
    specs: ['/home/nimmi/eclipse-workspace/Project_Automation_SOKA/scripts/Login.js'], //The spec file address
    framework: 'jasmine', // jasmine frame work
    type: "node", // node
    directConnect: true,
    multiCapabilities: 
    	[
           {'browserName': 'chrome',chromeOptions: {args: ['--no-sandbox']}, count: 1}
//     	  ,{'browserName': 'firefox', marionette: false}
    	],
    onPrepare : function ()
        {
        glob: '0',
    	mysql      = require('mysql');
    	connection = mysql.createConnection({
    	  host     : 'db-staging.c1exchange.com',
    	  user     : 'c1x_user',
    	  password : 'c1x_user',
    	  port     : '3306',
    	  database : 'SOKA'
    	});
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        	savePath : '../Project_Automation_SOKA/reports'
        }));
        browser.manage().window().maximize();   //To maximize the current browser
        browser.manage().deleteAllCookies();   //In order to delete all the existing cookies
        browser.get('http://soka-staging.c1exchange.com:9000'); // Get the URL
        browser.waitForAngular();   //Wait for the content to load
        }
};
