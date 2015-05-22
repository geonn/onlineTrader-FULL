function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getProfitSummary() {
        var url = Ti.API.GETDEALERDAILYPROFIT + Ti.App.Properties.getString("session");
        var client = Ti.Network.createHTTPClient({
            onload: function(e) {
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) {
                    var dailyProfit = 0;
                    for (var key in res.data) {
                        var obj = res.data[key];
                        dailyProfit += parseFloat(obj.courier) + parseFloat(obj.cod) - parseFloat(obj.ads_cost) - parseFloat(obj.other_cost);
                    }
                    $.dailyProfit.text = dailyProfit.toFixed(2);
                } else getProfitSummary(e);
            },
            onerror: function(e) {
                getProfitSummary(e);
            },
            timeout: 6e4
        });
        client.open("GET", url);
        client.send();
    }
    function getSummary() {
        var url = Ti.API.GETDAILYSUMMARYBYMONTH + Ti.App.Properties.getString("session") + "&date=" + year + "-" + month;
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
                    }
                    $.monthCommission.text = res.total;
                    $.activityIndicator.hide();
                    $.loadingBar.opacity = "0";
                    $.loadingBar.height = "0";
                } else getSummary(e);
            },
            onerror: function(e) {
                getSummary(e);
            },
            timeout: 6e4
        });
        client.open("GET", url);
        client.send();
    }
    function getAnnouncement() {
        var url = Ti.API.GETANNOUNCEMENT + Ti.App.Properties.getString("session");
        var totalWidth = 0;
        var text = "";
        PixelsToDPUnits(Ti.Platform.displayCaps.platformWidth);
        var client = Ti.Network.createHTTPClient({
            onload: function(e) {
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) {
                    var count = 1;
                    for (var key in res.data) {
                        var obj = res.data[key];
                        var totalAnnouncement = res.data.length;
                        var seperator = "";
                        totalAnnouncement > count && (seperator = " | ");
                        text = text + obj.message + seperator;
                        count++;
                    }
                    var label = Titanium.UI.createLabel({
                        height: 25,
                        left: 50,
                        top: 3,
                        font: {
                            fontSize: "16"
                        },
                        color: "black",
                        width: Ti.UI.FIT,
                        wordWrap: false,
                        horizontalWrap: false,
                        text: text
                    });
                    label.addEventListener("postlayout", function(e) {
                        totalWidth = e.source.rect.width;
                        var screenWidthDP = Ti.Platform.displayCaps.platformWidth / (Titanium.Platform.displayCaps.dpi / 160);
                        var animation = Titanium.UI.createAnimation({
                            right: screenWidthDP,
                            duration: 8e3,
                            curve: Titanium.UI.ANIMATION_CURVE_LINEAR
                        });
                        animation.addEventListener("complete", function() {
                            e.source.right = 0;
                            e.source.animate(animation);
                        });
                        e.source.animate(animation);
                    });
                    $.noticeBoard.add(label);
                } else getAnnouncement(e);
            },
            onerror: function(e) {
                getAnnouncement(e);
            },
            timeout: 6e4
        });
        client.open("GET", url);
        client.send();
    }
    function setInventoryTableView() {
        var url = Ti.API.GETINVENTORYDATA + Ti.App.Properties.getString("session");
        console.log(url);
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var tableData = [];
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) {
                    for (var key in res.data) {
                        var obj = res.data[key];
                        var row = Ti.UI.createTableViewRow({
                            height: Ti.UI.SIZE,
                            width: Ti.UI.FILL
                        });
                        var lable_item = Ti.UI.createLabel({
                            text: obj.product,
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "#000000",
                            left: 5
                        });
                        var lable_amount = Ti.UI.createLabel({
                            text: obj.used,
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "#000000",
                            right: 5
                        });
                        row.add(lable_item);
                        row.add(lable_amount);
                        tableData.push(row);
                    }
                    $.inventoryTableView.setData(tableData);
                }
            },
            onerror: function(e) {
                console.log("e");
                getAnnouncement(e);
                setInventoryTableView();
            },
            timeout: 2e4
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
        fullscreen: false,
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "dealer_summary",
        height: Ti.UI.FILL
    });
    $.__views.dealer_summary && $.addTopLevelView($.__views.dealer_summary);
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
    $.__views.dealer_summary.add($.__views.loadingBar);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        top: 15,
        left: 20,
        width: 60,
        id: "activityIndicator"
    });
    $.__views.loadingBar.add($.__views.activityIndicator);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        text: "Loading",
        left: "20",
        top: "10",
        id: "__alloyId83"
    });
    $.__views.loadingBar.add($.__views.__alloyId83);
    $.__views.header = Alloy.createController("_header", {
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header",
        __parentSymbol: $.__views.dealer_summary
    });
    $.__views.header.setParent($.__views.dealer_summary);
    $.__views.__alloyId84 = Ti.UI.createView({
<<<<<<< HEAD
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        bottom: "92",
        layout: "vertical",
        id: "__alloyId84"
    });
    $.__views.dealer_summary.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
=======
>>>>>>> origin/master
        top: "60dp",
        font: {
            fontSize: "14dp",
            fontFamily: "sans-serif"
        },
        color: "#525252",
        layout: "vertical",
        left: "5dp",
        right: "5dp",
<<<<<<< HEAD
        height: Ti.UI.SIZE,
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
=======
        height: "170",
        id: "__alloyId84"
    });
    $.__views.dealer_summary.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp",
            fontFamily: "sans-serif"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "DEALER - SUMMARY",
<<<<<<< HEAD
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId87"
    });
    $.__views.__alloyId85.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        height: "30",
        id: "__alloyId88"
    });
    $.__views.__alloyId85.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
=======
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId86"
    });
    $.__views.__alloyId84.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        height: "30",
        id: "__alloyId87"
    });
    $.__views.__alloyId84.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Titanium.UI.FILL,
        color: "#000",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        text: "Today Commission",
        top: "10dp",
        left: "10dp",
<<<<<<< HEAD
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
=======
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId88.add($.__views.todayCommission);
    $.__views.__alloyId90 = Ti.UI.createLabel({
=======
    $.__views.__alloyId87.add($.__views.todayCommission);
    $.__views.__alloyId89 = Ti.UI.createLabel({
>>>>>>> origin/master
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
<<<<<<< HEAD
        id: "__alloyId90"
    });
    $.__views.__alloyId88.add($.__views.__alloyId90);
    popup ? $.__views.__alloyId90.addEventListener("click", popup) : __defers["$.__views.__alloyId90!click!popup"] = true;
    $.__views.__alloyId91 = Ti.UI.createView({
        height: "30",
        id: "__alloyId91"
    });
    $.__views.__alloyId85.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
=======
        id: "__alloyId89"
    });
    $.__views.__alloyId87.add($.__views.__alloyId89);
    popup ? $.__views.__alloyId89.addEventListener("click", popup) : __defers["$.__views.__alloyId89!click!popup"] = true;
    $.__views.__alloyId90 = Ti.UI.createView({
        height: "30",
        id: "__alloyId90"
    });
    $.__views.__alloyId84.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Titanium.UI.FILL,
        color: "#000",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        text: "Monthly Commission",
        top: "10dp",
        left: "10dp",
<<<<<<< HEAD
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
=======
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId91.add($.__views.monthCommission);
    $.__views.__alloyId93 = Ti.UI.createLabel({
=======
    $.__views.__alloyId90.add($.__views.monthCommission);
    $.__views.__alloyId92 = Ti.UI.createLabel({
>>>>>>> origin/master
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
        mod: "monthly_commission_detail",
<<<<<<< HEAD
        id: "__alloyId93"
    });
    $.__views.__alloyId91.add($.__views.__alloyId93);
    popup ? $.__views.__alloyId93.addEventListener("click", popup) : __defers["$.__views.__alloyId93!click!popup"] = true;
    $.__views.__alloyId94 = Ti.UI.createView({
        height: "30",
        id: "__alloyId94"
    });
    $.__views.__alloyId85.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
=======
        id: "__alloyId92"
    });
    $.__views.__alloyId90.add($.__views.__alloyId92);
    popup ? $.__views.__alloyId92.addEventListener("click", popup) : __defers["$.__views.__alloyId92!click!popup"] = true;
    $.__views.__alloyId93 = Ti.UI.createView({
        height: "30",
        id: "__alloyId93"
    });
    $.__views.__alloyId84.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Titanium.UI.FILL,
        color: "#000",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        text: "Daily Profit",
        top: "10dp",
        left: "10dp",
<<<<<<< HEAD
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
=======
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
>>>>>>> origin/master
    $.__views.dailyProfit = Ti.UI.createLabel({
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
        id: "dailyProfit"
    });
<<<<<<< HEAD
    $.__views.__alloyId94.add($.__views.dailyProfit);
    $.__views.__alloyId96 = Ti.UI.createLabel({
=======
    $.__views.__alloyId93.add($.__views.dailyProfit);
    $.__views.__alloyId95 = Ti.UI.createLabel({
>>>>>>> origin/master
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
        mod: "daily_profit",
<<<<<<< HEAD
        id: "__alloyId96"
    });
    $.__views.__alloyId94.add($.__views.__alloyId96);
    popup ? $.__views.__alloyId96.addEventListener("click", popup) : __defers["$.__views.__alloyId96!click!popup"] = true;
    $.__views.__alloyId97 = Ti.UI.createLabel({
=======
        id: "__alloyId95"
    });
    $.__views.__alloyId93.add($.__views.__alloyId95);
    popup ? $.__views.__alloyId95.addEventListener("click", popup) : __defers["$.__views.__alloyId95!click!popup"] = true;
    $.__views.__alloyId96 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp",
            fontFamily: "sans-serif"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "MONTHLY SALES",
<<<<<<< HEAD
        id: "__alloyId97"
    });
    $.__views.__alloyId85.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId98"
    });
    $.__views.__alloyId85.add($.__views.__alloyId98);
    $.__views.inventoryTableView = Ti.UI.createTableView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "inventoryTableView"
=======
        id: "__alloyId96"
    });
    $.__views.__alloyId84.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId97"
    });
    $.__views.__alloyId84.add($.__views.__alloyId97);
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
    $.__views.dealer_summary.add($.__views.loadingBar);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        top: 15,
        left: 20,
        width: 60,
        id: "activityIndicator"
    });
    $.__views.loadingBar.add($.__views.activityIndicator);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#ffffff",
        font: {
            fontSize: "12dp",
            fontFamily: "sans-serif"
        },
        text: "Loading",
        left: "20",
        top: "10",
        id: "__alloyId98"
    });
    $.__views.loadingBar.add($.__views.__alloyId98);
    $.__views.webview = Ti.UI.createWebView({
        top: 0,
        height: "auto",
        id: "webview",
        layout: "vertical",
        disableBounce: "true",
        loading: "true",
        width: "100%",
        url: "/html/dealer_summary_inventory.html"
>>>>>>> origin/master
    });
    $.__views.__alloyId84.add($.__views.inventoryTableView);
    $.__views.noticeBoard = Ti.UI.createScrollView({
        id: "noticeBoard",
        bottom: "64",
        backgroundColor: "#E3F5FE",
        layout: "horizontal",
        scrollType: "horizontal",
        height: "28"
    });
    $.__views.dealer_summary.add($.__views.noticeBoard);
    $.__views.footer = Alloy.createController("_dealer_footer", {
        height: 64,
        width: Titanium.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        contentWidth: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_summary
    });
    $.__views.footer.setParent($.__views.dealer_summary);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    setTimeout(function() {
        getSummary();
        getProfitSummary();
    }, 1e3);
    $.activityIndicator.show();
    $.loadingBar.opacity = "1";
    $.loadingBar.height = "100";
    $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - $.loadingBar.getHeight() / 2;
    getAnnouncement();
    var summary = $.footer.getView("summary");
    summary.image = "/images/icons/icon-summary-active.png";
    Ti.App.Properties.setString("module", "dealer_summary");
    PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    10 > month && (month = "0" + month);
    10 > day && (day = "0" + day);
    var today = year + "-" + month + "-" + day;
    Titanium.UI.createLabel({
        left: 320,
        width: 300,
        height: 20,
        color: "black",
        text: "horizontal auto scrolling text"
    });
    setInventoryTableView();
    var removeLoading = function() {
        Ti.App.removeEventListener("app:removeLoading", removeLoading);
    };
    Ti.App.addEventListener("app:removeLoading", removeLoading);
<<<<<<< HEAD
    __defers["$.__views.__alloyId90!click!popup"] && $.__views.__alloyId90.addEventListener("click", popup);
    __defers["$.__views.__alloyId93!click!popup"] && $.__views.__alloyId93.addEventListener("click", popup);
    __defers["$.__views.__alloyId96!click!popup"] && $.__views.__alloyId96.addEventListener("click", popup);
=======
    __defers["$.__views.__alloyId89!click!popup"] && $.__views.__alloyId89.addEventListener("click", popup);
    __defers["$.__views.__alloyId92!click!popup"] && $.__views.__alloyId92.addEventListener("click", popup);
    __defers["$.__views.__alloyId95!click!popup"] && $.__views.__alloyId95.addEventListener("click", popup);
>>>>>>> origin/master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;