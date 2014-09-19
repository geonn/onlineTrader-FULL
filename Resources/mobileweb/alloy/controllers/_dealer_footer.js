function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "_dealer_footer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.footer = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer"
    });
    $.__views.footer && $.addTopLevelView($.__views.footer);
<<<<<<< HEAD
    $.__views.__alloyId0 = Ti.UI.createImageView({
=======
    $.__views.__alloyId30 = Ti.UI.createImageView({
>>>>>>> master
        width: "20%",
        mod: "summary",
        left: "0",
        image: "/images/icons/icon-summary.png",
<<<<<<< HEAD
        id: "__alloyId0"
    });
    $.__views.footer.add($.__views.__alloyId0);
    goNav ? $.__views.__alloyId0.addEventListener("click", goNav) : __defers["$.__views.__alloyId0!click!goNav"] = true;
    $.__views.__alloyId1 = Ti.UI.createImageView({
        width: "20%",
        left: "20%",
        image: "/images/icons/icon-neworder.png",
        id: "__alloyId1"
    });
    $.__views.footer.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        width: "20%",
        left: "40%",
        image: "/images/icons/icon-listing.png",
        id: "__alloyId2"
    });
    $.__views.footer.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createImageView({
        width: "20%",
        left: "60%",
        image: "/images/icons/icon-pos.png",
        id: "__alloyId3"
    });
    $.__views.footer.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createImageView({
=======
        id: "__alloyId30"
    });
    $.__views.footer.add($.__views.__alloyId30);
    goNav ? $.__views.__alloyId30.addEventListener("click", goNav) : __defers["$.__views.__alloyId30!click!goNav"] = true;
    $.__views.__alloyId31 = Ti.UI.createImageView({
        width: "20%",
        left: "20%",
        image: "/images/icons/icon-neworder.png",
        id: "__alloyId31"
    });
    $.__views.footer.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createImageView({
        width: "20%",
        left: "40%",
        image: "/images/icons/icon-listing.png",
        id: "__alloyId32"
    });
    $.__views.footer.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createImageView({
        width: "20%",
        left: "60%",
        image: "/images/icons/icon-pos.png",
        id: "__alloyId33"
    });
    $.__views.footer.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createImageView({
>>>>>>> master
        width: "20%",
        mod: "settings",
        left: "80%",
        image: "/images/icons/icon-setting.png",
<<<<<<< HEAD
        id: "__alloyId4"
    });
    $.__views.footer.add($.__views.__alloyId4);
    goNav ? $.__views.__alloyId4.addEventListener("click", goNav) : __defers["$.__views.__alloyId4!click!goNav"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId0!click!goNav"] && $.__views.__alloyId0.addEventListener("click", goNav);
    __defers["$.__views.__alloyId4!click!goNav"] && $.__views.__alloyId4.addEventListener("click", goNav);
=======
        id: "__alloyId34"
    });
    $.__views.footer.add($.__views.__alloyId34);
    goNav ? $.__views.__alloyId34.addEventListener("click", goNav) : __defers["$.__views.__alloyId34!click!goNav"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId30!click!goNav"] && $.__views.__alloyId30.addEventListener("click", goNav);
    __defers["$.__views.__alloyId34!click!goNav"] && $.__views.__alloyId34.addEventListener("click", goNav);
>>>>>>> master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;