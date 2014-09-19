function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dispatcher_summary";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.dispatcher_summary = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "dispatcher_summary"
    });
    $.__views.dispatcher_summary && $.addTopLevelView($.__views.dispatcher_summary);
    $.__views.footer = Alloy.createController("_header", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dispatcher_summary
    });
    $.__views.footer.setParent($.__views.dispatcher_summary);
<<<<<<< HEAD
    $.__views.__alloyId27 = Ti.UI.createView({
=======
    $.__views.__alloyId16 = Ti.UI.createView({
>>>>>>> master
        top: "60dp",
        font: {
            fontSize: "16dp"
        },
        color: "#e02222",
        layout: "vertical",
        left: "10dp",
        right: "10dp",
        height: "500",
<<<<<<< HEAD
        id: "__alloyId27"
    });
    $.__views.dispatcher_summary.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
=======
        id: "__alloyId16"
    });
    $.__views.dispatcher_summary.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
>>>>>>> master
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "DISPATCHER - SUMMARY",
<<<<<<< HEAD
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createImageView({
=======
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createImageView({
>>>>>>> master
        width: "100%",
        height: 1,
        borderWidth: 1,
        borderColor: "#9d0404",
<<<<<<< HEAD
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        height: "40",
        id: "__alloyId30"
    });
    $.__views.__alloyId27.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
=======
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        height: "40",
        id: "__alloyId19"
    });
    $.__views.__alloyId16.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
>>>>>>> master
        width: Titanium.UI.FILL,
        color: "#e02222",
        text: "Today Commission",
        top: "10dp",
        left: "10dp",
<<<<<<< HEAD
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
=======
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
>>>>>>> master
        width: "20%",
        color: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10dp",
        left: "80%",
        text: "40",
<<<<<<< HEAD
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        height: "40",
        id: "__alloyId33"
    });
    $.__views.__alloyId27.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
=======
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        height: "40",
        id: "__alloyId22"
    });
    $.__views.__alloyId16.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
>>>>>>> master
        width: Titanium.UI.FILL,
        color: "#e02222",
        text: "Monthly Commission",
        top: "10dp",
        left: "10dp",
<<<<<<< HEAD
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
=======
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
>>>>>>> master
        width: "20%",
        color: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10dp",
        left: "80%",
        text: "200",
<<<<<<< HEAD
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createImageView({
=======
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createImageView({
>>>>>>> master
        width: "100%",
        height: 1,
        borderWidth: 1,
        borderColor: "#9d0404",
<<<<<<< HEAD
        id: "__alloyId36"
    });
    $.__views.__alloyId27.add($.__views.__alloyId36);
=======
        id: "__alloyId25"
    });
    $.__views.__alloyId16.add($.__views.__alloyId25);
>>>>>>> master
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;