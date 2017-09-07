/**
 * Created by nimmi on 11/7/17.
 */
var CampaignValues = (function ()
{
    var selectFirstCampaign,clickProduct,viewProduct,autoAllocation,Campaign_name;                          
    module.exports = {                                             
        selectFirstCampaign : element(By.xpath('//*[@id="theme"]/div/div[2]/ui-view/div[2]/div[2]/div/soka-product-catalog/div/soka-wizard-tile-view/div/div[2]/div[1]')),
               clickProduct : element(By.css('[ng-click="productClick(product)"]')),
               viewProduct : element(By.css('[ng-click="showProducts()"]')),
               autoAllocation : element(By.css('[ng-if="campaign.autoAllocation"]')),
               Campaign_name : element(By.css('[ng-model="campaign.name"]'))
               };
}());