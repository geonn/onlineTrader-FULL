function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dealer_posdetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.posdetail_win = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "posdetail_win"
    });
    $.__views.posdetail_win && $.addTopLevelView($.__views.posdetail_win);
    $.__views.__alloyId38 = Alloy.createController("_subheader", {
        id: "__alloyId38",
        __parentSymbol: $.__views.posdetail_win
    });
    $.__views.__alloyId38.setParent($.__views.posdetail_win);
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
    $.__views.posdetail_win.add($.__views.content);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "POS DETAILS",
        id: "__alloyId39"
    });
    $.__views.content.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId40"
    });
    $.__views.content.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "90%",
        top: "90",
        id: "__alloyId41"
    });
    $.__views.posdetail_win.add($.__views.__alloyId41);
    $.__views.posdetailview = Ti.UI.createWebView({
        id: "posdetailview",
        disableBounce: "true",
        url: "/html/dealer_posdetail.html"
    });
    $.__views.__alloyId41.add($.__views.posdetailview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var p_id = args.p_id || "";
    Ti.App.Properties.setString("current_pid", p_id);
    Ti.App.Properties.setString("module", "dealer_poslist");
    Ti.App.fireEvent("getSession", {
        session: Ti.App.Properties.getString("session")
    });
    $.posdetailview.addEventListener("load", function() {
        Ti.App.fireEvent("app:posDetailsParam", {
            session: Ti.App.Properties.getString("session"),
            update: Ti.API.UPDATEPOS + Ti.App.Properties.getString("session"),
            details: Ti.API.GETPOSDETAIL + Ti.App.Properties.getString("session") + "&p_id=" + p_id,
            product: Ti.API.GETPRODUCT
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;