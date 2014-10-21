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
    this.__controllerPath = "dealer_statistic";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.dealer_statistic = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "dealer_statistic"
    });
    $.__views.dealer_statistic && $.addTopLevelView($.__views.dealer_statistic);
    $.__views.footer = Alloy.createController("_header", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_statistic
    });
    $.__views.footer.setParent($.__views.dealer_statistic);
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
    $.__views.dealer_statistic.add($.__views.content);
    $.__views.titleHeader = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Top Sales Location",
        id: "titleHeader"
    });
    $.__views.content.add($.__views.titleHeader);
    $.__views.__alloyId70 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId70"
    });
    $.__views.content.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "70%",
        top: "90",
        id: "__alloyId71"
    });
    $.__views.dealer_statistic.add($.__views.__alloyId71);
    $.__views.salessatisticview = Ti.UI.createWebView({
        id: "salessatisticview",
        disableBounce: "true",
        url: "/html/dealer_statistic.html"
    });
    $.__views.__alloyId71.add($.__views.salessatisticview);
    $.__views.r_sub_footer = Alloy.createController("_dealer_subfooter", {
        id: "r_sub_footer",
        __parentSymbol: $.__views.dealer_statistic
    });
    $.__views.r_sub_footer.setParent($.__views.dealer_statistic);
    $.__views.footer = Alloy.createController("_dealer_footer", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_statistic
    });
    $.__views.footer.setParent($.__views.dealer_statistic);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var stat = $.footer.getView("statistic");
    stat.image = "/images/icons/icon-ranking-active.png";
    Ti.App.Properties.setString("module", "dealer_statistic");
    var changeTitle = function(e) {
        $.titleHeader.text = e.title;
    };
    Ti.App.addEventListener("changeTitle", changeTitle);
    $.dealer_statistic.addEventListener("close", function() {
        Ti.App.removeEventListener("changeTitle", changeTitle);
    });
    $.salessatisticview.addEventListener("load", function() {
        Ti.App.fireEvent("app:getStatistic", {
            session: Ti.App.Properties.getString("session"),
            url: Ti.API.GETSTATISTIC + Ti.App.Properties.getString("session"),
            userstat: Ti.API.GETUSERSTAT + Ti.App.Properties.getString("session"),
            datelist: Ti.API.GETDATELIST + Ti.App.Properties.getString("session")
        });
    });
    $.dealer_statistic.addEventListener("close", function() {
        Ti.App.removeEventListener("changeTitle", changeTitle);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;