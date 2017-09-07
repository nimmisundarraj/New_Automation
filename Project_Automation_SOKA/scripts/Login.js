var Constant = require('../pom/loginConstants.js');
		
describe('SOKA Automation', function()
{
	connection.connect();
	browser.waitForAngular();
    it('Login page Title', function()
    {
        expect(browser.getTitle()).toEqual('Login');
    });
    
    it('Count before creating Automation campaign', function(done) {	 
        var sqlQuery = 'select count(*) as count from campaign where account_id=1 and marketer_id=2';
        connection.query(sqlQuery, function(err, columns) {
        	expect(err).toBe(null);
            if (!err) {
            	glob = columns[0].count;
            	console.log(""+sqlQuery+": "+glob);
                }
            else
            	{
            	console.log(err);
            	}
            done(err);
        });
    });

    it('Verify the user gets logged in', function ()
    { 
      Constant.usernamepath.sendKeys(Constant.username);
      Constant.passwordpath.sendKeys(Constant.password);
      Constant.loginbutton.click().then(function ()
        { 
          expect(browser.getCurrentUrl()).toMatch('/marketer/dashboard');
        })
    });
    browser.waitForAngular();
    require('./CreateCampaign.js');
});