function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function construct() {
        console.log(Ti.API.GETTRACKING + Ti.App.Properties.getString("session") + "&o_id=" + o_id);
        Ti.App.fireEvent("app:trackingParam", {
            o_id: o_id,
            tracking: Ti.API.GETTRACKING + Ti.App.Properties.getString("session") + "&o_id=" + o_id
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dispatcher_ordertracking";
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
    $.__views.tracking = Ti.UI.createWindow({
        fullscreen: true,
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "tracking"
    });
    $.__views.tracking && $.addTopLevelView($.__views.tracking);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header"
    });
    $.__views.tracking.add($.__views.header);
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
<<<<<<< HEAD
    $.__views.__alloyId137 = Ti.UI.createView({
=======
    $.__views.__alloyId138 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        right: 0,
        left: "25%",
        top: "0%",
<<<<<<< HEAD
        id: "__alloyId137"
    });
    $.__views.header.add($.__views.__alloyId137);
=======
        id: "__alloyId138"
    });
    $.__views.header.add($.__views.__alloyId138);
>>>>>>> origin/master
    $.__views.appTitle = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: "20dp"
        },
        text: "Tracking Details",
        id: "appTitle"
    });
    $.__views.header.add($.__views.appTitle);
<<<<<<< HEAD
    $.__views.__alloyId138 = Ti.UI.createView({
=======
    $.__views.__alloyId139 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        right: 0,
        left: "75%",
        top: "0%",
<<<<<<< HEAD
        id: "__alloyId138"
    });
    $.__views.header.add($.__views.__alloyId138);
=======
        id: "__alloyId139"
    });
    $.__views.header.add($.__views.__alloyId139);
>>>>>>> origin/master
    $.__views.rightMenu = Ti.UI.createLabel({
        width: "25%",
        color: "#fff",
        left: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "ADD",
        id: "rightMenu",
        mod: "composetracking"
    });
    $.__views.header.add($.__views.rightMenu);
    popup ? $.__views.rightMenu.addEventListener("touchend", popup) : __defers["$.__views.rightMenu!touchend!popup"] = true;
    $.__views.webview_tracking = Ti.UI.createWebView({
        id: "webview_tracking",
        width: "100%",
        top: "50",
        height: "90%",
        disableBounce: "true",
        url: "/html/tracking.html"
    });
    $.__views.tracking.add($.__views.webview_tracking);
    construct ? $.__views.webview_tracking.addEventListener("load", construct) : __defers["$.__views.webview_tracking!load!construct"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var o_id = Ti.App.Properties.getString("current_oid");
    url = Ti.API.SETUNREAD + Ti.App.Properties.getString("session") + "&o_id=" + o_id;
    xhr.get(url);
    __defers["$.__views.backTitle!touchend!goBack"] && $.__views.backTitle.addEventListener("touchend", goBack);
    __defers["$.__views.rightMenu!touchend!popup"] && $.__views.rightMenu.addEventListener("touchend", popup);
    __defers["$.__views.webview_tracking!load!construct"] && $.__views.webview_tracking.addEventListener("load", construct);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;