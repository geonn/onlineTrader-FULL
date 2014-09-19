function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "_dispatcher_footer";
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
    $.__views.__alloyId5 = Ti.UI.createImageView({
=======
    $.__views.__alloyId35 = Ti.UI.createImageView({
>>>>>>> master
        width: "20%",
        mod: "summary",
        left: "0",
        image: "/images/icons/icon-summary.png",
<<<<<<< HEAD
        id: "__alloyId5"
    });
    $.__views.footer.add($.__views.__alloyId5);
    goNav ? $.__views.__alloyId5.addEventListener("click", goNav) : __defers["$.__views.__alloyId5!click!goNav"] = true;
    $.__views.__alloyId6 = Ti.UI.createImageView({
        width: "20%",
        left: "25%",
        image: "/images/icons/icon-neworder.png",
        id: "__alloyId6"
    });
    $.__views.footer.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createImageView({
        width: "20%",
        left: "50%",
        image: "/images/icons/icon-listing.png",
        id: "__alloyId7"
    });
    $.__views.footer.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createImageView({
=======
        id: "__alloyId35"
    });
    $.__views.footer.add($.__views.__alloyId35);
    goNav ? $.__views.__alloyId35.addEventListener("click", goNav) : __defers["$.__views.__alloyId35!click!goNav"] = true;
    $.__views.__alloyId36 = Ti.UI.createImageView({
        width: "20%",
        left: "25%",
        image: "/images/icons/icon-neworder.png",
        id: "__alloyId36"
    });
    $.__views.footer.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createImageView({
        width: "20%",
        left: "50%",
        image: "/images/icons/icon-listing.png",
        id: "__alloyId37"
    });
    $.__views.footer.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createImageView({
>>>>>>> master
        width: "20%",
        mod: "settings",
        left: "75%",
        image: "/images/icons/icon-setting.png",
<<<<<<< HEAD
        id: "__alloyId8"
    });
    $.__views.footer.add($.__views.__alloyId8);
    goNav ? $.__views.__alloyId8.addEventListener("click", goNav) : __defers["$.__views.__alloyId8!click!goNav"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId5!click!goNav"] && $.__views.__alloyId5.addEventListener("click", goNav);
    __defers["$.__views.__alloyId8!click!goNav"] && $.__views.__alloyId8.addEventListener("click", goNav);
=======
        id: "__alloyId38"
    });
    $.__views.footer.add($.__views.__alloyId38);
    goNav ? $.__views.__alloyId38.addEventListener("click", goNav) : __defers["$.__views.__alloyId38!click!goNav"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId35!click!goNav"] && $.__views.__alloyId35.addEventListener("click", goNav);
    __defers["$.__views.__alloyId38!click!goNav"] && $.__views.__alloyId38.addEventListener("click", goNav);
>>>>>>> master
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;