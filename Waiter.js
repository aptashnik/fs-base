function wait(stateSupplier) {
    return new Waiter(stateSupplier)
}

class Waiter {
    constructor(actualSupplier) {
        this.actualSupplier = actualSupplier
        this.timeout = 5
    }
    toBe(expectedState) {
        this.expected = expectedState
        return this
    }
    forTime(newTimeout) {
        this.timeout = newTimeout
        return this
    }
    start() {
        let res;
        try {
            browser.waitUntil(() => {
                try { res = this.actualSupplier() } catch (e) { return false }
                return res === this.expected
            }, this.timeout * 1000)
        } catch (e) { }
        return res;
    }
}

module.exports = wait