function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "_dealer_subheader";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header"
    });
    $.__views.header && $.addTopLevelView($.__views.header);
    $.__views.__alloyId1 = Ti.UI.createImageView({
        height: "90%",
        left: "5%",
        top: "5%",
        image: "/images/btn-back-header.png",
        id: "__alloyId1"
    });
    $.__views.header.add($.__views.__alloyId1);
    goBack ? $.__views.__alloyId1.addEventListener("click", goBack) : __defers["$.__views.__alloyId1!click!goBack"] = true;
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId1!click!goBack"] && $.__views.__alloyId1.addEventListener("click", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;