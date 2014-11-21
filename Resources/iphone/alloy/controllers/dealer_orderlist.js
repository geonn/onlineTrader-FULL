function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToDetails(e) {
        var roles = Ti.App.Properties.getString("roles");
        var param = {
            o_id: e.o_id
        };
        var orderdetail = Alloy.createController(roles + "_orderdetail", param).getView();
        setWindowRelationship(orderdetail);
    }
    function refreshPage() {
        Ti.App.fireEvent("app:refreshPage");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dealer_orderlist";
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
    $.__views.dealer_orderlist = Ti.UI.createWindow({
        backgroundImage: "/images/bg.jpg",
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
    $.__views.__alloyId33 = Ti.UI.createImageView({
        width: "7%",
        left: "10%",
        image: "/images/refresh-icon.png",
        id: "__alloyId33"
    });
    $.__views.header.add($.__views.__alloyId33);
    refreshPage ? $.__views.__alloyId33.addEventListener("touchend", refreshPage) : __defers["$.__views.__alloyId33!touchend!refreshPage"] = true;
    $.__views.__alloyId34 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        left: "25%",
        top: "0%",
        id: "__alloyId34"
    });
    $.__views.header.add($.__views.__alloyId34);
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
    $.__views.__alloyId35 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        left: "75%",
        top: "0%",
        id: "__alloyId35"
    });
    $.__views.header.add($.__views.__alloyId35);
    $.__views.rightNav = Ti.UI.createLabel({
        width: "25%",
        color: "#fff",
        left: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "ADD",
        id: "rightNav",
        mod: "newpost"
    });
    $.__views.header.add($.__views.rightNav);
    popup ? $.__views.rightNav.addEventListener("touchend", popup) : __defers["$.__views.rightNav!touchend!popup"] = true;
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
    $.__views.__alloyId36 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "DEALER - ORDER LIST",
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
    $.__views.list_form = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "70%",
        top: "90",
        id: "list_form"
    });
    $.__views.dealer_orderlist.add($.__views.list_form);
    $.__views.orderlistable = Ti.UI.createScrollView({
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        separatorColor: "transparent",
        height: "auto",
        id: "orderlistable",
        layout: "vertical"
    });
    $.__views.list_form.add($.__views.orderlistable);
    $.__views.orderlistview = Ti.UI.createWebView({
        layout: "vertical",
        id: "orderlistview",
        height: "auto",
        disableBounce: "true",
        url: "/html/dealer_orderlist.html"
    });
    $.__views.orderlistable.add($.__views.orderlistview);
    $.__views.footer = Alloy.createController("_dealer_footer", {
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
    orderlist.image = "/images/icons/icon-neworder-active.png";
    Ti.App.Properties.setString("module", "dealer_orderlist");
    Ti.App.Properties.setString("controller", "dealer_orderlist");
    Ti.App.fireEvent("getSession", {
        session: Ti.App.Properties.getString("session")
    });
    Ti.App.addEventListener("app:viewOrderDetail", goToDetails);
    $.orderlistview.evalJS("document.height;");
    var getData = function(data) {
        var url = data.queryUrl;
        xhr.get(url, onSuccessCallback, onErrorCallback, {
            ttl: 60
        });
    };
    var clearCache = function(data) {
        xhr.clear(data.queryUrl);
    };
    var onSuccessCallback = function(e) {
        Ti.App.fireEvent("html:realDrawTable", {
            data: JSON.parse(e.data)
        });
    };
    var onErrorCallback = function() {
        alert("no cache or connection lost");
    };
    Ti.App.addEventListener("Ti:getData", getData);
    Ti.App.addEventListener("Ti:clearCache", clearCache);
    $.orderlistview.addEventListener("load", function() {
        Ti.App.fireEvent("app:orderListParam", {
            session: Ti.App.Properties.getString("session"),
            url: Ti.API.GETDEALERORD + Ti.App.Properties.getString("session") + "&test"
        });
    });
    $.dealer_orderlist.addEventListener("close", function() {
        Ti.App.removeEventListener("Ti:getData", getData);
        Ti.App.removeEventListener("Ti:clearCache", clearCache);
        Ti.App.removeEventListener("app:viewOrderDetail", goToDetails);
    });
    $.dealer_orderlist.addEventListener("androidback", function() {
        Ti.App.removeEventListener("Ti:getData", getData);
        Ti.App.removeEventListener("Ti:clearCache", clearCache);
        Ti.App.removeEventListener("app:viewOrderDetail", goToDetails);
    });
    __defers["$.__views.__alloyId33!touchend!refreshPage"] && $.__views.__alloyId33.addEventListener("touchend", refreshPage);
    __defers["$.__views.rightNav!touchend!popup"] && $.__views.rightNav.addEventListener("touchend", popup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;