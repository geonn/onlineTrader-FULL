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
    this.__controllerPath = "_dealer_subfooter";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.subfooter = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "subfooter"
    });
    $.__views.subfooter && $.addTopLevelView($.__views.subfooter);
    $.__views.summary = Ti.UI.createImageView({
        width: "20%",
        id: "summary",
        mod: "summary",
        left: "0",
        image: "/images/icons/icon-summary.png"
    });
    $.__views.subfooter.add($.__views.summary);
    goNav ? $.__views.summary.addEventListener("touchend", goNav) : __defers["$.__views.summary!touchend!goNav"] = true;
    $.__views.newpost = Ti.UI.createImageView({
        width: "20%",
        id: "newpost",
        mod: "newpost",
        left: "20%",
        image: "/images/icons/icon-neworder.png"
    });
    $.__views.subfooter.add($.__views.newpost);
    goNav ? $.__views.newpost.addEventListener("touchend", goNav) : __defers["$.__views.newpost!touchend!goNav"] = true;
    $.__views.orderlist = Ti.UI.createImageView({
        width: "20%",
        id: "orderlist",
        mod: "orderlist",
        left: "40%",
        image: "/images/icons/icon-listing.png"
    });
    $.__views.subfooter.add($.__views.orderlist);
    goNav ? $.__views.orderlist.addEventListener("touchend", goNav) : __defers["$.__views.orderlist!touchend!goNav"] = true;
    $.__views.__alloyId0 = Ti.UI.createImageView({
        width: "20%",
        left: "60%",
        image: "/images/icons/icon-pos.png",
        id: "__alloyId0"
    });
    $.__views.subfooter.add($.__views.__alloyId0);
    $.__views.settings = Ti.UI.createImageView({
        width: "20%",
        id: "settings",
        mod: "settings",
        left: "80%",
        image: "/images/icons/icon-setting.png"
    });
    $.__views.subfooter.add($.__views.settings);
    goNav ? $.__views.settings.addEventListener("touchend", goNav) : __defers["$.__views.settings!touchend!goNav"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.summary!touchend!goNav"] && $.__views.summary.addEventListener("touchend", goNav);
    __defers["$.__views.newpost!touchend!goNav"] && $.__views.newpost.addEventListener("touchend", goNav);
    __defers["$.__views.orderlist!touchend!goNav"] && $.__views.orderlist.addEventListener("touchend", goNav);
    __defers["$.__views.settings!touchend!goNav"] && $.__views.settings.addEventListener("touchend", goNav);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;