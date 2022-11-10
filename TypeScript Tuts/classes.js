var Mobile = /** @class */ (function () {
    function Mobile() {
    }
    Object.defineProperty(Mobile.prototype, "Supports5g", {
        get: function () { return this.support5g; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "Price", {
        get: function () { return this.price; },
        set: function (cost) { this.price = cost; },
        enumerable: false,
        configurable: true
    });
    return Mobile;
}());
var iPhone = new Mobile();
iPhone.price = 35000;
iPhone.mobileName = "iPhone 11 pro";
//iPhone.support5g = false; //error.
