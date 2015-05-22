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
    this.__controllerPath = "dispatcher_daily_commission";
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
    $.__views.dealer_orderlist = Ti.UI.createWindow({
        fullscreen: false,
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "dealer_orderlist"
    });
    $.__views.dealer_orderlist && $.addTopLevelView($.__views.dealer_orderlist);
<<<<<<< HEAD
    $.__views.__alloyId104 = Alloy.createController("_subheader", {
        id: "__alloyId104",
        __parentSymbol: $.__views.dealer_orderlist
    });
    $.__views.__alloyId104.setParent($.__views.dealer_orderlist);
=======
    $.__views.__alloyId105 = Alloy.createController("_subheader", {
        id: "__alloyId105",
        __parentSymbol: $.__views.dealer_orderlist
    });
    $.__views.__alloyId105.setParent($.__views.dealer_orderlist);
>>>>>>> origin/master
    $.__views.content = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "14dp",
            fontFamily: "sans-serif"
        },
        color: "#525252",
        layout: "vertical",
        left: "5dp",
        right: "5dp",
        id: "content"
    });
    $.__views.dealer_orderlist.add($.__views.content);
<<<<<<< HEAD
    $.__views.__alloyId105 = Ti.UI.createLabel({
=======
    $.__views.__alloyId106 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "DAILY COMMISSION LIST",
<<<<<<< HEAD
        id: "__alloyId105"
    });
    $.__views.content.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId106"
    });
    $.__views.content.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
=======
        id: "__alloyId106"
    });
    $.__views.content.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId107"
    });
    $.__views.content.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createView({
>>>>>>> origin/master
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "100%",
<<<<<<< HEAD
        id: "__alloyId107"
    });
    $.__views.content.add($.__views.__alloyId107);
=======
        id: "__alloyId108"
    });
    $.__views.content.add($.__views.__alloyId108);
>>>>>>> origin/master
    $.__views.orderlistview = Ti.UI.createWebView({
        id: "orderlistview",
        height: "auto",
        disableBounce: "true",
        url: "/html/dealer_dailylist.html"
    });
<<<<<<< HEAD
    $.__views.__alloyId107.add($.__views.orderlistview);
=======
    $.__views.__alloyId108.add($.__views.orderlistview);
>>>>>>> origin/master
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    if ("monthlyCommission" == args.from) var today = args.date; else {
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        10 > month && (month = "0" + month);
        10 > day && (day = "0" + day);
        var today = day + "/" + month + "/" + year;
    }
    $.orderlistview.addEventListener("load", function() {
        Ti.App.fireEvent("app:orderListParam", {
            session: Ti.App.Properties.getString("session"),
            url: Ti.API.GETCOMMISSION + Ti.App.Properties.getString("session") + "&date=" + today
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;