class WebPage {

    get itchioLink() { return $('footer #game-link'); }

	open(path) {
		browser.url('/');
    }
    
    clickItchioLink() {
        this.itchioLink.click();
    }
}

module.exports = new WebPage();