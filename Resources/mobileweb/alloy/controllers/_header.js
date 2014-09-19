function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "_header";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header"
    });
    $.__views.header && $.addTopLevelView($.__views.header);
<<<<<<< HEAD
    $.__views.__alloyId9 = Ti.UI.createImageView({
=======
    $.__views.__alloyId39 = Ti.UI.createImageView({
>>>>>>> master
        height: "90%",
        left: "5%",
        top: "10%",
        image: "/images/icons/icon-home.png",
<<<<<<< HEAD
        id: "__alloyId9"
    });
    $.__views.header.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
=======
        id: "__alloyId39"
    });
    $.__views.header.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
>>>>>>> master
        width: Titanium.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: "20dp"
        },
        text: "ONLINE TRADER",
<<<<<<< HEAD
        id: "__alloyId10"
    });
    $.__views.header.add($.__views.__alloyId10);
=======
        id: "__alloyId40"
    });
    $.__views.header.add($.__views.__alloyId40);
>>>>>>> master
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;