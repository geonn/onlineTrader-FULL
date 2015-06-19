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
    this.__controllerPath = "dealer_newpost";
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
    $.__views.dealer_newpost = Ti.UI.createWindow({
        fullscreen: "false",
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "dealer_newpost"
    });
    $.__views.dealer_newpost && $.addTopLevelView($.__views.dealer_newpost);
    $.__views.__alloyId33 = Alloy.createController("_subheader", {
        id: "__alloyId33",
        __parentSymbol: $.__views.dealer_newpost
    });
    $.__views.__alloyId33.setParent($.__views.dealer_newpost);
    $.__views.content = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "16dp"
        },
        color: "#e02222",
        layout: "vertical",
        left: "5dp",
        right: "5dp",
        id: "content"
    });
    $.__views.dealer_newpost.add($.__views.content);
    $.__views.titleHeader = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "NEW POST",
        id: "titleHeader"
    });
    $.__views.content.add($.__views.titleHeader);
    $.__views.__alloyId34 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId34"
    });
    $.__views.content.add($.__views.__alloyId34);
    $.__views.newpostview = Ti.UI.createWebView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "auto",
        top: "90",
        id: "newpostview",
        url: "/html/dealer_newpost.html"
    });
    $.__views.dealer_newpost.add($.__views.newpostview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.fireEvent("getSession", {
        session: Ti.App.Properties.getString("session")
    });
    var addOrderComplete = function() {
        goBack();
    };
    Ti.App.addEventListener("addOrderComplete", addOrderComplete);
    $.newpostview.addEventListener("load", function() {
        Ti.App.fireEvent("app:newPostParam", {
            session: Ti.App.Properties.getString("session"),
            url: Ti.API.ADDORDER,
            state: Ti.API.GETSTATE,
            product: Ti.API.GETPRODUCT
        });
    });
    $.dealer_newpost.addEventListener("close", function() {
        Ti.App.removeEventListener("addOrderComplete", addOrderComplete);
    });
    var triggerAlert = function(e) {
        createAlert(e.tt, e.msg);
        Ti.App.removeEventListener("app:triggerAlert", triggerAlert);
    };
    Ti.App.addEventListener("app:triggerAlert", triggerAlert);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;