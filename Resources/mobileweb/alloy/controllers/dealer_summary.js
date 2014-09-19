function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dealer_summary";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.dealer_summary = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "dealer_summary"
    });
    $.__views.dealer_summary && $.addTopLevelView($.__views.dealer_summary);
    $.__views.footer = Alloy.createController("_header", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_summary
    });
    $.__views.footer.setParent($.__views.dealer_summary);
<<<<<<< HEAD
    $.__views.__alloyId14 = Ti.UI.createView({
=======
    $.__views.__alloyId3 = Ti.UI.createView({
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
        id: "__alloyId14"
    });
    $.__views.dealer_summary.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
=======
        id: "__alloyId3"
    });
    $.__views.dealer_summary.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
>>>>>>> master
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "DEALER - SUMMARY",
<<<<<<< HEAD
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createImageView({
=======
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createImageView({
>>>>>>> master
        width: "100%",
        height: 1,
        borderWidth: 1,
        borderColor: "#9d0404",
<<<<<<< HEAD
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        height: "40",
        id: "__alloyId17"
    });
    $.__views.__alloyId14.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
=======
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        height: "40",
        id: "__alloyId6"
    });
    $.__views.__alloyId3.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
>>>>>>> master
        width: Titanium.UI.FILL,
        color: "#e02222",
        text: "Today Commission",
        top: "10dp",
        left: "10dp",
<<<<<<< HEAD
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
=======
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
>>>>>>> master
        width: "20%",
        color: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10dp",
        left: "80%",
        text: "100",
<<<<<<< HEAD
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        height: "40",
        id: "__alloyId20"
    });
    $.__views.__alloyId14.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
=======
        id: "__alloyId8"
    });
    $.__views.__alloyId6.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: "40",
        id: "__alloyId9"
    });
    $.__views.__alloyId3.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
>>>>>>> master
        width: Titanium.UI.FILL,
        color: "#e02222",
        text: "Monthly Commission",
        top: "10dp",
        left: "10dp",
<<<<<<< HEAD
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
=======
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
>>>>>>> master
        width: "20%",
        color: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10dp",
        left: "80%",
        text: "800",
<<<<<<< HEAD
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createImageView({
=======
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
>>>>>>> master
        width: "100%",
        height: 1,
        borderWidth: 1,
        borderColor: "#9d0404",
<<<<<<< HEAD
        id: "__alloyId23"
    });
    $.__views.__alloyId14.add($.__views.__alloyId23);
=======
        id: "__alloyId12"
    });
    $.__views.__alloyId3.add($.__views.__alloyId12);
>>>>>>> master
    $.__views.footer = Alloy.createController("_dealer_footer", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_summary
    });
    $.__views.footer.setParent($.__views.dealer_summary);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;