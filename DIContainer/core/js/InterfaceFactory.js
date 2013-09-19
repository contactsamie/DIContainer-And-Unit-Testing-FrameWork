//inheritance
_DIContainer.prototype.warn("applying interface definition...");
_DIContainer.prototype.InterfaceFactory = function () {
    var interfaces = function () { };
    interfaces.prototype.eventFactory = function () {
        return {
            raise: function (sender) { },
            subscribe: []
        };
    };
    interfaces.prototype.DOM = {
        fadeInMyBox: function () { },
        fadeOutMyBox: function () { },
        changeWidthOfMyBox: function (o) { console.log("Not implemeted"); }
    };
    interfaces.prototype.injFakeHello = function (o) { return "" };

    return interfaces;
};