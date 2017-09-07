/**
 * Created by nimmi on 11/7/17.
 */
describe('Campaign Creation', function()
{
   browser.waitForAngular();
   
   it('Check the URL', function()
   {
var Dashboard = require('../pom/dashboardConstants.js');	  
    Dashboard.newcampaignclick.click();
    expect(browser.getCurrentUrl()).toMatch('/marketer/campaign');
   });
   
   it('Select the Products', function()
   {
var newCampaignConstant = require('../pom/campaignConstants.js');
var countLoopLive = 4;

for (var countLoop=1;countLoop<countLoopLive;countLoop++)
    {
var selectFirstCampaign = element(By.xpath('//*[@id="theme"]/div/div[2]/ui-view/div[2]/div[2]/div/soka-product-catalog/div/soka-wizard-tile-view/div/div[2]/div['+countLoop+']/div'));
    browser.actions().mouseMove(selectFirstCampaign).perform();
    expect(element(By.xpath('//*[@id="theme"]/div/div[2]/ui-view/div[2]/div[2]/div/soka-product-catalog/div/soka-wizard-tile-view/div/div[2]/div['+countLoop+']/div/div[1]/div/p/a/span')).isPresent()).toBe(true);

    var DetectLiveCampaigns =  element(By.xpath('//*[@id="theme"]/div/div[2]/ui-view/div[2]/div[2]/div/soka-product-catalog/div/soka-wizard-tile-view/div/div[2]/div['+countLoop+']/div/div[1]/div/p/a/span'));
    DetectLiveCampaigns.click();
    }

    var currentdate = new Date();
    var Hours = currentdate.getHours();
    var Minutes = currentdate.getMinutes();
    var Seconds = currentdate.getSeconds();
      if(Hours>11){Hours=currentdate.getHours()-12;}
      if(Hours<10){Hours = "0"+Hours;}
      if(Minutes<10){Minutes = "0"+Minutes;}
      if(Seconds<10){Seconds = "0"+Seconds;}
    var time = Hours + ":" + Minutes + ":" + Seconds;
   newCampaignConstant.Campaign_name.sendKeys('Automation Campaign @ '+time);
   newCampaignConstant.viewProduct.click();
   browser.sleep(2000);
   }); 
   
   require('./AutoAllocation.js'); 
});