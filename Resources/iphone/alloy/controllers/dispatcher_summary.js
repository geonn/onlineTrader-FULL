function Controller() {
    function getSummary() {
        var url = Ti.API.GETSUMMARY + Ti.App.Properties.getString("session");
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                if ("Success" == res.status) {
                    var currentTime = new Date();
                    var monthCommission = 0;
                    var month = currentTime.getMonth() + 1;
                    var day = currentTime.getDate();
                    var year = currentTime.getFullYear();
                    10 > month && (month = "0" + month);
                    10 > day && (day = "0" + day);
                    var today = year + "-" + month + "-" + day;
                    for (var key in res.data) {
                        var obj = res.data[key];
                        if (obj.created == today) {
                            var todaycomm = parseFloat(obj.commission);
                            $.todayCommission.text = todaycomm.toFixed(2);
                        }
                        monthCommission = parseFloat(obj.commission);
                    }
                    $.monthCommission.text = monthCommission.toFixed(2);
                } else getSummary();
            },
            onerror: function() {
                getSummary();
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dispatcher_summary";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.dispatcher_summary = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "dispatcher_summary"
    });
    $.__views.dispatcher_summary && $.addTopLevelView($.__views.dispatcher_summary);
    $.__views.header = Alloy.createController("_header", {
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header",
        __parentSymbol: $.__views.dispatcher_summary
    });
    $.__views.header.setParent($.__views.dispatcher_summary);
    $.__views.__alloyId128 = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "14dp",
            fontFamily: "sans-serif"
        },
        color: "#525252",
        layout: "vertical",
        left: "5dp",
        right: "5dp",
        height: "500",
        id: "__alloyId128"
    });
    $.__views.dispatcher_summary.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "DISPATCH - COMMISSION",
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId130"
    });
    $.__views.__alloyId128.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        height: "30",
        id: "__alloyId131"
    });
    $.__views.__alloyId128.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#000",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        text: "Today Commission",
        top: "10dp",
        left: "10dp",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
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
    $.__views.__alloyId131.add($.__views.todayCommission);
    $.__views.__alloyId133 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#fff",
        font: {
            fontSize: "12dp"
        },
        backgroundColor: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        text: "DETAIL",
        top: "10dp",
        left: "80%",
        mod: "daily_commission",
        id: "__alloyId133"
    });
    $.__views.__alloyId131.add($.__views.__alloyId133);
    popup ? $.__views.__alloyId133.addEventListener("touchend", popup) : __defers["$.__views.__alloyId133!touchend!popup"] = true;
    $.__views.__alloyId134 = Ti.UI.createView({
        height: "30",
        id: "__alloyId134"
    });
    $.__views.__alloyId128.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#000",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        text: "Monthly Commission",
        top: "10dp",
        left: "10dp",
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
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
    $.__views.__alloyId134.add($.__views.monthCommission);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#fff",
        font: {
            fontSize: "12dp"
        },
        backgroundColor: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        text: "DETAIL",
        top: "10dp",
        left: "80%",
        mod: "monthly_commission",
        id: "__alloyId136"
    });
    $.__views.__alloyId134.add($.__views.__alloyId136);
    popup ? $.__views.__alloyId136.addEventListener("touchend", popup) : __defers["$.__views.__alloyId136!touchend!popup"] = true;
    $.__views.list_form = Ti.UI.createScrollView({
        height: "auto",
        id: "list_form"
    });
    $.__views.__alloyId128.add($.__views.list_form);
    $.__views.donelistview = Ti.UI.createWebView({
        id: "donelistview",
        showHorizontalScrollIndicator: "false",
        disableBounce: "true",
        url: "/html/dispatcher_donelist.html"
    });
    $.__views.list_form.add($.__views.donelistview);
    $.__views.footer = Alloy.createController("_dispatcher_footer", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dispatcher_summary
    });
    $.__views.footer.setParent($.__views.dispatcher_summary);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    getSummary();
    var summary = $.footer.getView("summary");
    summary.image = "/images/icons/icon-summary-active.png";
    Ti.App.Properties.setString("module", "dispatcher_summary");
    $.donelistview.addEventListener("load", function() {
        Ti.App.fireEvent("app:dispatchrdoneListParam", {
            session: Ti.App.Properties.getString("session"),
            url: Ti.API.GETDONELIST + Ti.App.Properties.getString("session")
        });
    });
    __defers["$.__views.__alloyId133!touchend!popup"] && $.__views.__alloyId133.addEventListener("touchend", popup);
    __defers["$.__views.__alloyId136!touchend!popup"] && $.__views.__alloyId136.addEventListener("touchend", popup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;