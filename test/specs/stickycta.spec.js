Assert = require('assert');
WebPage = require('../pages/webpage.page');
TabsUtility = require('../utilities/tabs.utility');

describe('The sticky cta', () => {
    before(() => {
        WebPage.open();
    });

    it('should not be visible when page first loads', () => {
        Assert.equal(WebPage.isStickyCtaVisible(), false);
    });

    it('should be visible when the page is scrolled', () => {
        browser.scroll(0, 200);
        browser.pause(500);
        Assert.equal(WebPage.isStickyCtaVisible(), true);
    });

    it('should link to itch.io', () => {
        WebPage.clickItchioLink();
        TabsUtility.toggleTabs();
        Assert.equal(browser.getTitle(), 'Download the latest indie games - itch.io');
    });
});