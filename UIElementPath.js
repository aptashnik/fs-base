class UIElementPath {
    constructor(frame, locator) {
        if(arguments.length == 0)
            [locator, frame] = [frame, locator]
        this.frame = frame
        this.locator = locator
    }
    get frame() {
        return this.frame
    }
    get locator() {
        return this.locator
    }
}

module.exports = UIElementPath