class TabsUtility {

	toggleTabs(currentTabId) {
        browser.pause(5000);

        var currentTabId = browser.getCurrentTabId();
        var tabIds = browser.getTabIds();

        for (var i = 0; i < tabIds.length; i++) {
            if (tabIds[i] !== currentTabId) {
                browser.switchTab(tabIds[i]);
                break;
            }
        }
    }
}

module.exports = new TabsUtility();