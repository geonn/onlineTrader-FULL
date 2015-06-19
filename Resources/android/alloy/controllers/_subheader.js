function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "_subheader";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header"
    });
    $.__views.header && $.addTopLevelView($.__views.header);
    $.__views.backTitle = Ti.UI.createLabel({
        width: "25%",
        color: "#fff",
        left: "0%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "BACK",
        id: "backTitle"
    });
    $.__views.header.add($.__views.backTitle);
    goBack ? $.__views.backTitle.addEventListener("touchend", goBack) : __defers["$.__views.backTitle!touchend!goBack"] = true;
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        right: 0,
        left: "25%",
        top: "0%",
        id: "__alloyId3"
    });
    $.__views.header.add($.__views.__alloyId3);
    $.__views.appTitle = Ti.UI.createLabel({
        width: "75%",
        color: "#fff",
        font: {
            fontSize: "20dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        left: "25%",
        text: "ONLINE TRADER",
        id: "appTitle"
    });
    $.__views.header.add($.__views.appTitle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.backTitle.addEventListener("touchstart", function() {
        this.setBackgroundColor("#fff");
        this.setColor("#e02222");
    });
    $.backTitle.addEventListener("touchend", function() {
        this.setBackgroundColor("transparent");
        this.setColor("#fff");
    });
    __defers["$.__views.backTitle!touchend!goBack"] && $.__views.backTitle.addEventListener("touchend", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;