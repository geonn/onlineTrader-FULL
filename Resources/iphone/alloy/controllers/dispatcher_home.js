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
        Ti.App.fireEvent("app:refreshPage");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dispatcher_home";
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
    $.__views.dispatcher_home_win = Ti.UI.createWindow({
        fullscreen: true,
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "dispatcher_home_win"
    });
    $.__views.dispatcher_home_win && $.addTopLevelView($.__views.dispatcher_home_win);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header"
    });
    $.__views.dispatcher_home_win.add($.__views.header);
    $.__views.__alloyId114 = Ti.UI.createImageView({
        width: "7%",
        left: "10%",
        image: "/images/refresh-icon.png",
        id: "__alloyId114"
    });
    $.__views.header.add($.__views.__alloyId114);
    refreshPage ? $.__views.__alloyId114.addEventListener("touchend", refreshPage) : __defers["$.__views.__alloyId114!touchend!refreshPage"] = true;
    $.__views.__alloyId115 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        right: 0,
        left: "25%",
        top: "0%",
        id: "__alloyId115"
    });
    $.__views.header.add($.__views.__alloyId115);
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
    $.__views.dispatcher_home_win.add($.__views.content);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "HOME - ALL TASK",
        id: "__alloyId116"
    });
    $.__views.content.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId117"
    });
    $.__views.content.add($.__views.__alloyId117);
    $.__views.home_form = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "70%",
        top: "90",
        id: "home_form"
    });
    $.__views.dispatcher_home_win.add($.__views.home_form);
    $.__views.orderlistable = Ti.UI.createScrollView({
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        separatorColor: "transparent",
        height: "auto",
        id: "orderlistable",
        layout: "vertical"
    });
    $.__views.home_form.add($.__views.orderlistable);
    $.__views.dis_home = Ti.UI.createWebView({
        layout: "vertical",
        id: "dis_home",
        height: "auto",
        disableBounce: "true",
        url: "/html/dispatcher_home.html"
    });
    $.__views.orderlistable.add($.__views.dis_home);
    $.__views.footer = Alloy.createController("_dispatcher_footer", {
        height: 64,
        width: Titanium.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        contentWidth: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dispatcher_home_win
    });
    $.__views.footer.setParent($.__views.dispatcher_home_win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var home = $.footer.getView("home");
    home.image = "/images/icons/icon-dispatcher-task-active.png";
    Ti.App.Properties.setString("module", "dispatcher_home");
    $.dis_home.addEventListener("load", function() {
        console.log(Ti.API.GETPNDORDER + Ti.App.Properties.getString("session"));
        Ti.App.fireEvent("html:dispatchHomeInit", {
            session: Ti.App.Properties.getString("session"),
            url: Ti.API.GETPNDORDER + Ti.App.Properties.getString("session"),
            pick: Ti.API.PICKORDER + Ti.App.Properties.getString("session"),
            state: Ti.API.GETSTATE
        });
    });
    __defers["$.__views.__alloyId114!touchend!refreshPage"] && $.__views.__alloyId114.addEventListener("touchend", refreshPage);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;