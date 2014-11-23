function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function loadTableRow(data) {
        var tableData = [];
        for (var i = 0; i < data.length; i++) {
            var row = Ti.UI.createTableViewRow({
                className: "forumEvent",
                rowIndex: i,
                selectionStyle: 0,
                separatorColor: "#ccc",
                width: "100%",
                day: data[i]["date"]
            });
            var lblField = Ti.UI.createLabel({
                text: data[i]["date"],
                color: "#222",
                top: "10dp",
                left: "10dp"
            });
            var lblField2 = Ti.UI.createLabel({
                realValue: "Value",
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                top: "10dp",
                width: "20%",
                left: "80%",
                text: data[i]["value"],
                color: "#222"
            });
            var separator = Ti.UI.createView({
                top: 49,
                backgroundColor: "#9d0404",
                height: 1
            });
            row.add(lblField);
            row.add(lblField2);
            row.add(separator);
            tableData.push(row);
        }
        $.tableView.setData(tableData);
    }
    function getSummary() {
        var url = Ti.API.GETDAILYSUMMARYBYMONTH + Ti.App.Properties.getString("session") + "&date=" + date;
        var data = [];
        $.activityIndicator.show();
        $.loadingBar.opacity = "1";
        $.loadingBar.height = "100";
        $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                if ("Success" == res.status) {
                    var totalCommission = 0;
                    for (var key in res.data) {
                        var obj = res.data[key];
                        data.push({
                            date: obj.date,
                            value: obj.commission
                        });
                        totalCommission += parseFloat(obj.commission);
                    }
                    $.totalCommission.text = totalCommission;
                    loadTableRow(data);
                    data = null;
                    $.activityIndicator.hide();
                    $.loadingBar.opacity = "0";
                    $.loadingBar.height = "0";
                } else {
                    alert(res.status);
                    createAlert("Error", res.status);
                }
            },
            onerror: function() {
                createAlert("Network declined", "Failed to contact with server. Please make sure your device are connected to internet.");
            },
            timeout: 6e4
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dealer_monthly_commission_detail";
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
    $.__views.dealer_monthly_commission_detail = Ti.UI.createWindow({
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "dealer_monthly_commission_detail"
    });
    $.__views.dealer_monthly_commission_detail && $.addTopLevelView($.__views.dealer_monthly_commission_detail);
    $.__views.__alloyId25 = Alloy.createController("_subheader", {
        id: "__alloyId25",
        __parentSymbol: $.__views.dealer_monthly_commission_detail
    });
    $.__views.__alloyId25.setParent($.__views.dealer_monthly_commission_detail);
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
    $.__views.dealer_monthly_commission_detail.add($.__views.content);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "MONTHLY COMMISSION DETAIL",
        id: "__alloyId26"
    });
    $.__views.content.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId27"
    });
    $.__views.content.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "85%",
        top: "90",
        id: "__alloyId28"
    });
    $.__views.dealer_monthly_commission_detail.add($.__views.__alloyId28);
    $.__views.dateSelector = Ti.UI.createWebView({
        id: "dateSelector",
        disableBounce: "true",
        height: "50",
        url: "/html/dealer_monthly_commission_detail.html"
    });
    $.__views.__alloyId28.add($.__views.dateSelector);
    $.__views.__alloyId29 = Ti.UI.createView({
        height: "40",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        left: "10",
        text: "Total :",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.totalCommission = Ti.UI.createLabel({
        width: "20%",
        color: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10dp",
        left: "80%",
        text: "0",
        id: "totalCommission"
    });
    $.__views.__alloyId29.add($.__views.totalCommission);
    $.__views.tableView = Ti.UI.createTableView({
        width: "100%",
        id: "tableView"
    });
    $.__views.__alloyId28.add($.__views.tableView);
    $.__views.loadingBar = Ti.UI.createView({
        layout: "vertical",
        id: "loadingBar",
        height: "0",
        width: "100",
        borderRadius: "15",
        top: "0",
        opacity: "1",
        backgroundColor: "#2E2E2E"
    });
    $.__views.dealer_monthly_commission_detail.add($.__views.loadingBar);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        top: 15,
        left: 20,
        width: 60,
        id: "activityIndicator"
    });
    $.__views.loadingBar.add($.__views.activityIndicator);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#ffffff",
        text: "Loading",
        left: "20",
        top: "10",
        id: "__alloyId31"
    });
    $.__views.loadingBar.add($.__views.__alloyId31);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var date = args.date || "";
    var clickTime = null;
    getSummary();
    Ti.App.Properties.setString("module", "dealer_summary");
    $.tableView.addEventListener("click", function(e) {
        var currentTime = new Date();
        if (1e3 > currentTime - clickTime) return;
        clickTime = currentTime;
        var prop = e.rowData.day;
        var param = {
            date: prop,
            from: "monthlyCommission"
        };
        var dailyCommission = Alloy.createController("dealer_daily_commission", param).getView();
        setWindowRelationship(dailyCommission);
    });
    $.dateSelector.addEventListener("load", function() {});
    var getDate = function(e) {
        date = e.year + "-" + e.month;
        getSummary(e);
    };
    Ti.App.addEventListener("app:getDate", getDate);
    $.dealer_monthly_commission_detail.addEventListener("close", function() {
        $.destroy();
        Ti.App.removeEventListener("app:getDate", getDate);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;