function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getDailySummary() {
        var url = Ti.API.GETDAILYSUMMARY + Ti.App.Properties.getString("session");
        console.log(url);
        var client = Ti.Network.createHTTPClient({
            onload: function(e) {
                var res = JSON.parse(this.responseText);
                if ("Success" == res.status) {
                    for (var key in res.data) {
                        var obj = res.data[key];
                        if (obj.created == today) {
                            var todaycomm = parseFloat(obj.commission);
                            $.todayCommission.text = todaycomm.toFixed(2);
                        }
                        monthCommission += parseFloat(obj.commission);
                    }
                    $.monthCommission.text = monthCommission.toFixed(2);
                } else getSummary(e);
            },
            onerror: function(e) {
                getSummary(e);
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    function getSummary() {
        var url = Ti.API.GETSUMMARY + Ti.App.Properties.getString("session");
        console.log("getsummary " + url);
        var client = Ti.Network.createHTTPClient({
            onload: function(e) {
                var res = JSON.parse(this.responseText);
                if ("Success" == res.status) {
                    var monthCommission = 0;
                    for (var key in res.data) {
                        var obj = res.data[key];
                        if (obj.created == today) {
                            var todaycomm = parseFloat(obj.commission);
                            $.todayCommission.text = todaycomm.toFixed(2);
                        }
                        monthCommission += parseFloat(obj.commission);
                    }
                    $.monthCommission.text = monthCommission.toFixed(2);
                } else getSummary(e);
            },
            onerror: function(e) {
                getSummary(e);
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dealer_summary";
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
    $.__views.dealer_summary = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "dealer_summary"
    });
    $.__views.dealer_summary && $.addTopLevelView($.__views.dealer_summary);
    $.__views.header = Alloy.createController("_header", {
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header",
        __parentSymbol: $.__views.dealer_summary
    });
    $.__views.header.setParent($.__views.dealer_summary);
    $.__views.__alloyId72 = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "14dp",
            fontFamily: "sans-serif"
        },
        color: "#525252",
        layout: "vertical",
        left: "5dp",
        right: "5dp",
        height: "150dp",
        id: "__alloyId72"
    });
    $.__views.dealer_summary.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp",
            fontFamily: "sans-serif"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "DEALER - SUMMARY",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId74"
    });
    $.__views.__alloyId72.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        height: "30",
        id: "__alloyId75"
    });
    $.__views.__alloyId72.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#000",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        text: "Today Commission",
        top: "10dp",
        left: "10dp",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.todayCommission = Ti.UI.createLabel({
        width: "20%",
        color: "#000",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10dp",
        left: "60%",
        text: "0",
        id: "todayCommission"
    });
    $.__views.__alloyId75.add($.__views.todayCommission);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#fff",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        backgroundColor: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        text: "DETAIL",
        top: "10dp",
        left: "80%",
        mod: "daily_commission",
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    popup ? $.__views.__alloyId77.addEventListener("click", popup) : __defers["$.__views.__alloyId77!click!popup"] = true;
    $.__views.__alloyId78 = Ti.UI.createView({
        height: "30",
        id: "__alloyId78"
    });
    $.__views.__alloyId72.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#000",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        text: "Monthly Commission",
        top: "10dp",
        left: "10dp",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.monthCommission = Ti.UI.createLabel({
        width: "20%",
        color: "#000",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10dp",
        left: "60%",
        text: "0",
        id: "monthCommission"
    });
    $.__views.__alloyId78.add($.__views.monthCommission);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#fff",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        backgroundColor: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        text: "DETAIL",
        top: "10dp",
        left: "80%",
        mod: "monthly_commission",
        id: "__alloyId80"
    });
    $.__views.__alloyId78.add($.__views.__alloyId80);
    popup ? $.__views.__alloyId80.addEventListener("click", popup) : __defers["$.__views.__alloyId80!click!popup"] = true;
    $.__views.__alloyId81 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp",
            fontFamily: "sans-serif"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "MONTHLY SALES",
        id: "__alloyId81"
    });
    $.__views.__alloyId72.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId82"
    });
    $.__views.__alloyId72.add($.__views.__alloyId82);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        color: "#888",
        id: "activityIndicator",
        message: "Loading..."
    });
    $.__views.__alloyId72.add($.__views.activityIndicator);
    $.__views.__alloyId83 = Ti.UI.createView({
        top: "150dp",
        id: "__alloyId83"
    });
    $.__views.dealer_summary.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createScrollView({
        height: "77%",
        layout: "vertical",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.webview = Ti.UI.createWebView({
        top: 0,
        id: "webview",
        layout: "vertical",
        height: "auto",
        disableBounce: "true",
        loading: "true",
        width: "100%",
        url: "/html/dealer_summary_inventory.html"
    });
    $.__views.__alloyId84.add($.__views.webview);
    $.__views.footer = Alloy.createController("_dealer_footer", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_summary
    });
    $.__views.footer.setParent($.__views.dealer_summary);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    getSummary();
    getDailySummary();
    var summary = $.footer.getView("summary");
    summary.image = "/images/icons/icon-summary-active.png";
    Ti.App.Properties.setString("module", "dealer_summary");
    var currentTime = new Date();
    var monthCommission = 0;
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    10 > month && (month = "0" + month);
    10 > day && (day = "0" + day);
    var today = year + "-" + month + "-" + day;
    $.webview.addEventListener("load", function() {
        $.activityIndicator.show();
        var url = Ti.API.GETINVENTORY + Ti.App.Properties.getString("session");
        Ti.App.fireEvent("app:urlFromApp", {
            url: url
        });
    });
    var removeLoading = function() {
        $.activityIndicator.hide();
        Ti.App.removeEventListener("app:removeLoading", removeLoading);
    };
    Ti.App.addEventListener("app:removeLoading", removeLoading);
    __defers["$.__views.__alloyId77!click!popup"] && $.__views.__alloyId77.addEventListener("click", popup);
    __defers["$.__views.__alloyId80!click!popup"] && $.__views.__alloyId80.addEventListener("click", popup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;