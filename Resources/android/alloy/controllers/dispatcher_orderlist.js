function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function refreshPage() {
        Ti.App.fireEvent("app:dispatchRefreshPage");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dispatcher_orderlist";
    if (arguments[0]) {
<<<<<<< HEAD
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
=======
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
>>>>>>> FETCH_HEAD
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.dealer_orderlist = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "dealer_orderlist"
    });
    $.__views.dealer_orderlist && $.addTopLevelView($.__views.dealer_orderlist);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header"
    });
    $.__views.dealer_orderlist.add($.__views.header);
    $.__views.__alloyId109 = Ti.UI.createImageView({
        width: "7%",
        left: "10%",
        image: "/images/refresh-icon.png",
        id: "__alloyId109"
    });
    $.__views.header.add($.__views.__alloyId109);
    refreshPage ? $.__views.__alloyId109.addEventListener("touchend", refreshPage) : __defers["$.__views.__alloyId109!touchend!refreshPage"] = true;
    $.__views.__alloyId110 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        left: "25%",
        top: "0%",
        id: "__alloyId110"
    });
    $.__views.header.add($.__views.__alloyId110);
    $.__views.appTitle = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: "20dp"
        },
        text: "ONLINE TRADER",
        id: "appTitle"
    });
    $.__views.header.add($.__views.appTitle);
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
    $.__views.dealer_orderlist.add($.__views.content);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "DISPATCH - ORDER LIST",
        id: "__alloyId111"
    });
    $.__views.content.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId112"
    });
    $.__views.content.add($.__views.__alloyId112);
    $.__views.list_form = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "72%",
        top: "90",
        id: "list_form"
    });
    $.__views.dealer_orderlist.add($.__views.list_form);
    $.__views.orderlistview = Ti.UI.createWebView({
        id: "orderlistview",
        disableBounce: "true",
        url: "/html/dispatcher_orderlist.html"
    });
    $.__views.list_form.add($.__views.orderlistview);
    $.__views.footer = Alloy.createController("_dispatcher_footer", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_orderlist
    });
    $.__views.footer.setParent($.__views.dealer_orderlist);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var orderlist = $.footer.getView("orderlist");
    orderlist.image = "/images/icons/icon-dispatcher-mytask-active.png";
    Ti.App.Properties.setString("module", "dispatcher_orderlist");
    Ti.App.fireEvent("getSession", {
        session: Ti.App.Properties.getString("session")
    });
    var goToDetails = function(e) {
        var roles = Ti.App.Properties.getString("roles");
        var param = {
            o_id: e.o_id
        };
        var orderdetail = Alloy.createController(roles + "_orderdetail", param).getView();
        setWindowRelationship(orderdetail);
    };
    Ti.App.addEventListener("app:viewOrderDetail", goToDetails);
    $.orderlistview.addEventListener("load", function() {
        Ti.App.fireEvent("app:dispatchrorderListParam", {
            session: Ti.App.Properties.getString("session"),
            url: Ti.API.GETDISPATCHORD + Ti.App.Properties.getString("session")
        });
    });
    $.dealer_orderlist.addEventListener("close", function() {
        Ti.App.removeEventListener("app:viewOrderDetail", goToDetails);
    });
    Alloy.Globals.deviceHeight <= "480" && ($.list_form.height = "67%");
    __defers["$.__views.__alloyId109!touchend!refreshPage"] && $.__views.__alloyId109.addEventListener("touchend", refreshPage);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;