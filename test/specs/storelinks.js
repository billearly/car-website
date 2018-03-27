Assert = require('assert');
WebPage = require('../pages/webpage.page');
TabsUtility = require('../utilities/tabs.utility');

describe('Links to store pages', () => {
    it('should go to itch.io', () => {
        WebPage.open();
        WebPage.clickItchioLink();
        TabsUtility.toggleTabs();

        Assert.equal(browser.getTitle(), 'Download the latest indie games - itch.io');
    });
});