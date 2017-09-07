describe('Autoallocation on/off',function()
{
	browser.waitForAngular();
	
	it('Check the Autoallocation on/off Button', function()
	{ 
var newCampaignConstant = require('../pom/campaignConstants.js');
    expect((newCampaignConstant.autoAllocation).isPresent()).toBe(true);
	newCampaignConstant.autoAllocation.click();
	browser.sleep(2000);
	});
	
	it('Should able to edit Budget', function()
	{
var autoAllocationew = require('../pom/AutoAllocationConstant.js');
    expect((autoAllocationew.editBudget).isPresent()).toBe(true);
    autoAllocationew.editBudget.click();
    browser.sleep(2000);
	});

	it('Validate the Budget', function()
	{
var autoAllocationSecond = require('../pom/AutoAllocationSecond.js');
    expect((autoAllocationSecond.budget).isPresent()).toBe(true);
    browser.actions().doubleClick(autoAllocationSecond.budget).perform();
    browser.sleep(2000);
    autoAllocationSecond.budget.sendKeys(protractor.Key.chord(protractor.Key.DELETE));
    browser.sleep(2000);
    autoAllocationSecond.budget.sendKeys('1500');
    expect((autoAllocationSecond.validate).isPresent()).toBe(true);
    autoAllocationSecond.validate.click();
	});
	
	it('Create Button click', function()
	{
var CreateButtonclick = require('../pom/CreatebuttonClick.js');
    CreateButtonclick.createButton.click().then(function()
	{
    browser.sleep(2000);
var AdgroupClick = require('../pom/createAdgroupConstant.js');
    expect((AdgroupClick.createAdgroupButton).isPresent()).toBe(true);
    AdgroupClick.createAdgroupButton.click();
    browser.sleep(4000);
    
    element(by.xpath('/html/body/div[3]/div/div[1]/p')).getText().then(function(text) 
    		{
    	    console.log('\n'+text);
    	    });
	});
	});
	require('./dataBaseConnection.js');
});