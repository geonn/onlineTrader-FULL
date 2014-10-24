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
    this.__controllerPath = "_orderdetailheader";
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
        id: "backTitle",
        fontSize: "14"
    });
    $.__views.header.add($.__views.backTitle);
    goBack ? $.__views.backTitle.addEventListener("touchend", goBack) : __defers["$.__views.backTitle!touchend!goBack"] = true;
    $.__views.__alloyId1 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        left: "25%",
        top: "0%",
        id: "__alloyId1"
    });
    $.__views.header.add($.__views.__alloyId1);
    $.__views.appTitle = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: "20dp"
        },
        text: "ONLINE TRADER",
        id: "appTitle"
    });
    $.__views.header.add($.__views.appTitle);
    $.__views.__alloyId2 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        left: "75%",
        top: "0%",
        id: "__alloyId2"
    });
    $.__views.header.add($.__views.__alloyId2);
    $.__views.trackingTitle = Ti.UI.createLabel({
        width: "25%",
        color: "#fff",
        left: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "TRACKING",
        id: "trackingTitle",
        mod: "ordertracking"
    });
    $.__views.header.add($.__views.trackingTitle);
    popup ? $.__views.trackingTitle.addEventListener("touchend", popup) : __defers["$.__views.trackingTitle!touchend!popup"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.trackingTitle.addEventListener("touchstart", function() {
        this.setBackgroundColor("#fff");
        this.setColor("#e02222");
    });
    $.trackingTitle.addEventListener("touchend", function() {
        this.setBackgroundColor("transparent");
        this.setColor("#fff");
    });
    $.backTitle.addEventListener("touchstart", function() {
        this.setBackgroundColor("#fff");
        this.setColor("#e02222");
    });
    $.backTitle.addEventListener("touchend", function() {
        this.setBackgroundColor("transparent");
        this.setColor("#fff");
    });
    __defers["$.__views.backTitle!touchend!goBack"] && $.__views.backTitle.addEventListener("touchend", goBack);
    __defers["$.__views.trackingTitle!touchend!popup"] && $.__views.trackingTitle.addEventListener("touchend", popup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;