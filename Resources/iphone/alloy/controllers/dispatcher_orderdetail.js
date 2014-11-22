function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function orderCancel() {
        var dialog = Ti.UI.createAlertDialog({
            cancel: 1,
            buttonNames: [ "No", "Yes" ],
            message: "Are you sure want to cancel?",
            title: "Order Delivery Status"
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel;
            1 === e.index && callOrderAction(Ti.API.REQUESTCANCEL);
        });
        dialog.show();
    }
    function orderRelease() {
        var dialog = Ti.UI.createAlertDialog({
            cancel: 1,
            buttonNames: [ "No", "Yes" ],
            message: "Are you sure want to release the order?",
            title: "Order Delivery Status"
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel;
            1 === e.index && callOrderAction(Ti.API.RELEASEORDER);
        });
        dialog.show();
    }
    function orderComplete() {
        var dialog = Ti.UI.createAlertDialog({
            cancel: 1,
            buttonNames: [ "Cancel", "Completed" ],
            message: "Mission Accomplished?",
            title: "Order Delivery Status"
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel;
            1 === e.index && callOrderAction(Ti.API.COMPLETEORDER);
        });
        dialog.show();
    }
    function callOrderAction(action) {
        var url = action + Ti.App.Properties.getString("session") + "&o_id=" + o_id;
        console.log(url);
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                "success" == res.status ? goBack() : alert("An known error occur. Please try again.");
            },
            onerror: function() {
                alert("An known error occur. Please try again.");
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    function construct() {
        Ti.App.fireEvent("app:orderDetailsParam", {
            o_id: o_id,
            session: Ti.App.Properties.getString("session"),
            update: Ti.API.UPDATEORDER + Ti.App.Properties.getString("session"),
            details: Ti.API.GETORDDETAILS + Ti.App.Properties.getString("session") + "&o_id=" + o_id,
            complete: Ti.API.COMPLETEORDER + Ti.App.Properties.getString("session") + "&o_id=" + o_id,
            cancel: Ti.API.REQUESTCANCEL + Ti.App.Properties.getString("session") + "&o_id=" + o_id,
            state: Ti.API.GETSTATE,
            product: Ti.API.GETPRODUCT
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dispatcher_orderdetail";
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
    $.__views.dis_orderdetail_win = Ti.UI.createWindow({
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "dis_orderdetail_win"
    });
    $.__views.dis_orderdetail_win && $.addTopLevelView($.__views.dis_orderdetail_win);
    $.__views.__alloyId113 = Alloy.createController("_orderdetailheader", {
        id: "__alloyId113",
        __parentSymbol: $.__views.dis_orderdetail_win
    });
    $.__views.__alloyId113.setParent($.__views.dis_orderdetail_win);
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
    $.__views.dis_orderdetail_win.add($.__views.content);
    $.__views.__alloyId114 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "ORDER DETAILS",
        id: "__alloyId114"
    });
    $.__views.content.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId115"
    });
    $.__views.content.add($.__views.__alloyId115);
    $.__views.details_formView = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "78%",
        top: "90",
        id: "details_formView"
    });
    $.__views.dis_orderdetail_win.add($.__views.details_formView);
    $.__views.orderdetailview = Ti.UI.createWebView({
        id: "orderdetailview",
        disableBounce: "true",
        url: "/html/dispatcher_orderdetail.html"
    });
    $.__views.details_formView.add($.__views.orderdetailview);
    construct ? $.__views.orderdetailview.addEventListener("load", construct) : __defers["$.__views.orderdetailview!load!construct"] = true;
    $.__views.footer = Ti.UI.createView({
        height: "62",
        width: Titanium.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        contentWidth: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        opacity: "0"
    });
    $.__views.dis_orderdetail_win.add($.__views.footer);
    $.__views.btnrelease = Ti.UI.createLabel({
        width: "33%",
        color: "#fff",
        left: "0%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "ORDER \nRELEASE",
        id: "btnrelease"
    });
    $.__views.footer.add($.__views.btnrelease);
    orderRelease ? $.__views.btnrelease.addEventListener("touchend", orderRelease) : __defers["$.__views.btnrelease!touchend!orderRelease"] = true;
    $.__views.__alloyId116 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        left: "33%",
        top: "0%",
        id: "__alloyId116"
    });
    $.__views.footer.add($.__views.__alloyId116);
    $.__views.btncancel = Ti.UI.createLabel({
        width: "33%",
        color: "#fff",
        left: "33%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "REQUEST \nCANCEL",
        id: "btncancel"
    });
    $.__views.footer.add($.__views.btncancel);
    orderCancel ? $.__views.btncancel.addEventListener("touchend", orderCancel) : __defers["$.__views.btncancel!touchend!orderCancel"] = true;
    $.__views.__alloyId117 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        left: "66%",
        top: "0%",
        id: "__alloyId117"
    });
    $.__views.footer.add($.__views.__alloyId117);
    $.__views.btncomplete = Ti.UI.createLabel({
        width: "33%",
        color: "#fff",
        left: "66%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "ORDER \nCOMPLETE",
        id: "btncomplete"
    });
    $.__views.footer.add($.__views.btncomplete);
    orderComplete ? $.__views.btncomplete.addEventListener("touchend", orderComplete) : __defers["$.__views.btncomplete!touchend!orderComplete"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var o_id = args.o_id || "";
    Ti.App.Properties.setString("current_oid", o_id);
    url = Ti.API.SETUNREAD + Ti.App.Properties.getString("session") + "&o_id=" + o_id;
    xhr.get(url);
    var showFooter = function() {
        $.footer.setOpacity(1);
    };
    Ti.App.addEventListener("showFooter", showFooter);
    $.orderdetailview.addEventListener("load", function() {
        Ti.App.fireEvent("app:orderDetailsParam", {
            session: Ti.App.Properties.getString("session"),
            update: Ti.API.UPDATEORDER + Ti.App.Properties.getString("session"),
            details: Ti.API.GETORDDETAILS + Ti.App.Properties.getString("session") + "&o_id=" + o_id,
            complete: Ti.API.COMPLETEORDER + Ti.App.Properties.getString("session") + "&o_id=" + o_id,
            cancel: Ti.API.REQUESTCANCEL + Ti.App.Properties.getString("session") + "&o_id=" + o_id,
            state: Ti.API.GETSTATE,
            product: Ti.API.GETPRODUCT
        });
    });
    $.dis_orderdetail_win.addEventListener("close", function() {
        Ti.App.removeEventListener("showFooter", showFooter);
    });
    $.btncancel.addEventListener("touchstart", function() {
        this.setBackgroundColor("#fff");
        this.setColor("#e02222");
    });
    $.btncancel.addEventListener("touchend", function() {
        this.setBackgroundColor("transparent");
        this.setColor("#fff");
    });
    $.btnrelease.addEventListener("touchstart", function() {
        this.setBackgroundColor("#fff");
        this.setColor("#e02222");
    });
    $.btnrelease.addEventListener("touchend", function() {
        this.setBackgroundColor("transparent");
        this.setColor("#fff");
    });
    $.btncomplete.addEventListener("touchstart", function() {
        this.setBackgroundColor("#fff");
        this.setColor("#e02222");
    });
    $.btncomplete.addEventListener("touchend", function() {
        this.setBackgroundColor("transparent");
        this.setColor("#fff");
    });
    __defers["$.__views.orderdetailview!load!construct"] && $.__views.orderdetailview.addEventListener("load", construct);
    __defers["$.__views.btnrelease!touchend!orderRelease"] && $.__views.btnrelease.addEventListener("touchend", orderRelease);
    __defers["$.__views.btncancel!touchend!orderCancel"] && $.__views.btncancel.addEventListener("touchend", orderCancel);
    __defers["$.__views.btncomplete!touchend!orderComplete"] && $.__views.btncomplete.addEventListener("touchend", orderComplete);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;