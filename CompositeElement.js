class CompositeElement {
    constructor(rootLocator, root) {
        this.rootLocator = rootLocator
        this.rootElem = root
    }

    get root() {
        try {
            this.rootElem.isVisible()
        } catch(e) {
            this.rootElem = $(this.rootLocator)
        }
        this.rootElem.waitForExist(9999)
        return this.rootElem
    }

    isInteractible() {
        return this.root.isDisplayed()
    }

    scroll() {
        const scrollingOpts = {behavior: 'smooth', inline: 'center', block: 'center'}
        browser.execute ((e, p) => {e.scrollIntoView(p)}, this.root, scrollingOpts)
    }
}

module.exports = CompositeElement