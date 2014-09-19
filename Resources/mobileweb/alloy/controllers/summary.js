function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "summary";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.summary = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "summary"
    });
    $.__views.summary && $.addTopLevelView($.__views.summary);
    $.__views.footer = Alloy.createController("_header", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.summary
    });
    $.__views.footer.setParent($.__views.summary);
    $.__views.__alloyId7 = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "16dp"
        },
        color: "#e02222",
        layout: "vertical",
        left: "10dp",
        right: "10dp",
        height: "500",
        id: "__alloyId7"
    });
    $.__views.summary.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "SUMMARY",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        borderWidth: 1,
        borderColor: "#9d0404",
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        height: "40",
        id: "__alloyId10"
    });
    $.__views.__alloyId7.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        text: "Today Commission",
        top: "10dp",
        left: "10dp",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10dp",
        left: "90%",
        text: "90",
        id: "__alloyId12"
    });
    $.__views.__alloyId10.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        height: "40",
        id: "__alloyId13"
    });
    $.__views.__alloyId7.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        text: "Monthly Commission",
        top: "10dp",
        left: "10dp",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "10dp",
        left: "90%",
        text: "6000",
        id: "__alloyId15"
    });
    $.__views.__alloyId13.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        borderWidth: 1,
        borderColor: "#9d0404",
        id: "__alloyId16"
    });
    $.__views.__alloyId7.add($.__views.__alloyId16);
    $.__views.footer = Alloy.createController("_footer", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.summary
    });
    $.__views.footer.setParent($.__views.summary);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;