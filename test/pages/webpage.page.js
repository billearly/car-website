class WebPage {

    get stickyCta()     { return $('.sticky-cta'); }
    get itchioLink()    { return $('.sticky-cta #game-link'); }

	open(path) {
		browser.url('/');
    }
    
    clickItchioLink() {
        this.itchioLink.click();
    }

    isStickyCtaVisible() {
        return this.stickyCta.isVisibleWithinViewport();
    }
}

module.exports = new WebPage();