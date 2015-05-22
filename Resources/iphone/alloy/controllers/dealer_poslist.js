function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goPosDetails(e) {
        var roles = Ti.App.Properties.getString("roles");
        var param = {
            p_id: e.p_id
        };
        var posdetail = Alloy.createController(roles + "_posdetail", param).getView();
        setWindowRelationship(posdetail);
    }
    function refreshPage() {
        Ti.App.fireEvent("app:refreshPage");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dealer_poslist";
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
    $.__views.dealer_poslist = Ti.UI.createWindow({
<<<<<<< HEAD
        fullscreen: true,
=======
        fullscreen: false,
>>>>>>> origin/master
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "dealer_poslist"
    });
    $.__views.dealer_poslist && $.addTopLevelView($.__views.dealer_poslist);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header"
    });
    $.__views.dealer_poslist.add($.__views.header);
<<<<<<< HEAD
    $.__views.__alloyId53 = Ti.UI.createImageView({
        width: "7%",
        left: "10%",
        image: "/images/refresh-icon.png",
        id: "__alloyId53"
    });
    $.__views.header.add($.__views.__alloyId53);
    refreshPage ? $.__views.__alloyId53.addEventListener("touchend", refreshPage) : __defers["$.__views.__alloyId53!touchend!refreshPage"] = true;
    $.__views.__alloyId54 = Ti.UI.createView({
=======
    $.__views.__alloyId54 = Ti.UI.createImageView({
        width: "7%",
        left: "10%",
        image: "/images/refresh-icon.png",
        id: "__alloyId54"
    });
    $.__views.header.add($.__views.__alloyId54);
    refreshPage ? $.__views.__alloyId54.addEventListener("touchend", refreshPage) : __defers["$.__views.__alloyId54!touchend!refreshPage"] = true;
    $.__views.__alloyId55 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        right: 0,
        left: "25%",
        top: "0%",
<<<<<<< HEAD
        id: "__alloyId54"
    });
    $.__views.header.add($.__views.__alloyId54);
=======
        id: "__alloyId55"
    });
    $.__views.header.add($.__views.__alloyId55);
>>>>>>> origin/master
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
<<<<<<< HEAD
    $.__views.__alloyId55 = Ti.UI.createView({
=======
    $.__views.__alloyId56 = Ti.UI.createView({
>>>>>>> origin/master
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        right: 0,
        left: "75%",
        top: "0%",
<<<<<<< HEAD
        id: "__alloyId55"
    });
    $.__views.header.add($.__views.__alloyId55);
=======
        id: "__alloyId56"
    });
    $.__views.header.add($.__views.__alloyId56);
>>>>>>> origin/master
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
        mod: "pos"
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
    $.__views.dealer_poslist.add($.__views.content);
<<<<<<< HEAD
    $.__views.__alloyId56 = Ti.UI.createLabel({
=======
    $.__views.__alloyId57 = Ti.UI.createLabel({
>>>>>>> origin/master
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "COURIER LIST",
<<<<<<< HEAD
        id: "__alloyId56"
    });
    $.__views.content.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId57"
    });
    $.__views.content.add($.__views.__alloyId57);
=======
        id: "__alloyId57"
    });
    $.__views.content.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId58"
    });
    $.__views.content.add($.__views.__alloyId58);
>>>>>>> origin/master
    $.__views.list_form = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "70%",
        top: "90",
        id: "list_form"
    });
    $.__views.dealer_poslist.add($.__views.list_form);
    $.__views.poslistable = Ti.UI.createScrollView({
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        separatorColor: "transparent",
        height: "auto",
        id: "poslistable",
        layout: "vertical"
    });
    $.__views.list_form.add($.__views.poslistable);
    $.__views.poslistview = Ti.UI.createWebView({
        layout: "vertical",
        height: "auto",
        id: "poslistview",
        disableBounce: "true",
        url: "/html/dealer_poslist.html"
    });
    $.__views.poslistable.add($.__views.poslistview);
    $.__views.footer = Alloy.createController("_dealer_footer", {
        height: 64,
        width: Titanium.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        contentWidth: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_poslist
    });
    $.__views.footer.setParent($.__views.dealer_poslist);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var poslist = $.footer.getView("poslist");
    poslist.image = "/images/icons/icon-pos-active.png";
    Ti.App.Properties.setString("module", "dealer_poslist");
    Ti.App.fireEvent("getSession", {
        session: Ti.App.Properties.getString("session")
    });
    Ti.UI.Android.hideSoftKeyboard();
    $.poslistview.addEventListener("load", function() {
        Ti.App.fireEvent("app:posListParam", {
            session: Ti.App.Properties.getString("session"),
            posUrl: Ti.API.GETPOS + Ti.App.Properties.getString("session")
        });
    });
    if (!Ti.App.dealer_poslist) {
        Ti.App.addEventListener("app:viewPosDetail", goPosDetails);
        Ti.App.dealer_poslist = true;
    }
    $.dealer_poslist.addEventListener("close", function() {
        Ti.App.removeEventListener("app:viewPosDetail", goPosDetails);
    });
    $.dealer_poslist.addEventListener("androidback", function() {
        Ti.App.removeEventListener("app:viewPosDetail", goPosDetails);
    });
    $.rightNav.addEventListener("touchstart", function() {
        this.setBackgroundColor("#fff");
        this.setColor("#e02222");
    });
    $.rightNav.addEventListener("touchend", function() {
        this.setBackgroundColor("transparent");
        this.setColor("#fff");
    });
<<<<<<< HEAD
    __defers["$.__views.__alloyId53!touchend!refreshPage"] && $.__views.__alloyId53.addEventListener("touchend", refreshPage);
=======
    __defers["$.__views.__alloyId54!touchend!refreshPage"] && $.__views.__alloyId54.addEventListener("touchend", refreshPage);
>>>>>>> origin/master
    __defers["$.__views.rightNav!touchend!popup"] && $.__views.rightNav.addEventListener("touchend", popup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;