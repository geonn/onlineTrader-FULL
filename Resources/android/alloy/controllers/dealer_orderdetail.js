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
            1 === e.index && callOrderAction(Ti.API.CANCELORDER);
        });
        dialog.show();
    }
    function callOrderAction(action) {
        var url = action + Ti.App.Properties.getString("session") + "&o_id=" + o_id;
        console.log(url);
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) {
                    goBack();
                    Ti.App.fireEvent("app:dispatchRefreshPage");
                } else alert("An known error occur. Please try again.");
            },
            onerror: function() {
                alert("An known error occur. Please try again.");
            },
            timeout: 6e4
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dealer_orderdetail";
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
    $.__views.orderdetail_win = Ti.UI.createWindow({
        fullscreen: false,
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "orderdetail_win"
    });
    $.__views.orderdetail_win && $.addTopLevelView($.__views.orderdetail_win);
    $.__views.__alloyId35 = Alloy.createController("_orderdetailheader", {
        id: "__alloyId35",
        __parentSymbol: $.__views.orderdetail_win
    });
    $.__views.__alloyId35.setParent($.__views.orderdetail_win);
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
    $.__views.orderdetail_win.add($.__views.content);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "ORDER DETAILS",
        id: "__alloyId36"
    });
    $.__views.content.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId37"
    });
    $.__views.content.add($.__views.__alloyId37);
    $.__views.details_formView = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "78%",
        top: "90",
        id: "details_formView"
    });
    $.__views.orderdetail_win.add($.__views.details_formView);
    $.__views.orderdetailview = Ti.UI.createWebView({
        id: "orderdetailview",
        disableBounce: "true",
        url: "/html/dealer_orderdetail.html"
    });
    $.__views.details_formView.add($.__views.orderdetailview);
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
    $.__views.orderdetail_win.add($.__views.footer);
    $.__views.btncancel = Ti.UI.createLabel({
        width: "33%",
        color: "#fff",
        left: "0%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "ORDER \nCANCEL",
        id: "btncancel"
    });
    $.__views.footer.add($.__views.btncancel);
    orderCancel ? $.__views.btncancel.addEventListener("touchend", orderCancel) : __defers["$.__views.btncancel!touchend!orderCancel"] = true;
    $.__views.__alloyId38 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        right: 0,
        left: "33%",
        top: "0%",
        id: "__alloyId38"
    });
    $.__views.footer.add($.__views.__alloyId38);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var o_id = args.o_id || "";
    Ti.App.Properties.setString("current_oid", o_id);
    Ti.App.Properties.setString("controller", "dealer_orderdetail");
    Ti.App.fireEvent("getSession", {
        session: Ti.App.Properties.getString("session")
    });
    var showFooter = function() {
        $.footer.setOpacity(1);
    };
    Ti.App.addEventListener("showFooter", showFooter);
    url = Ti.API.SETUNREAD + Ti.App.Properties.getString("session") + "&o_id=" + o_id;
    xhr.get(url);
    $.orderdetailview.addEventListener("load", function() {
        console.log(Ti.API.GETORDDETAILS + Ti.App.Properties.getString("session") + "&o_id=" + o_id);
        Ti.App.fireEvent("app:orderDetailsParam", {
            session: Ti.App.Properties.getString("session"),
            update: Ti.API.UPDATEORDER + Ti.App.Properties.getString("session"),
            details: Ti.API.GETORDDETAILS + Ti.App.Properties.getString("session") + "&o_id=" + o_id,
            state: Ti.API.GETSTATE,
            product: Ti.API.GETPRODUCT,
            url: Ti.API.ADDTRACKING
        });
    });
    $.orderdetail_win.addEventListener("close", function() {
        Ti.App.removeEventListener("showFooter", showFooter);
    });
    __defers["$.__views.btncancel!touchend!orderCancel"] && $.__views.btncancel.addEventListener("touchend", orderCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;