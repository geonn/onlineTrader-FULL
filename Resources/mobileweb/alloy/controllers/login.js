function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.__alloyId13 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "horizontal",
        id: "__alloyId13"
    });
    $.__views.login.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        text: "Username",
        title: "Name",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.name_field = Ti.UI.createTextField({
        id: "name_field"
    });
    $.__views.__alloyId13.add($.__views.name_field);
    $.__views.__alloyId15 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "horizontal",
        top: "50",
        id: "__alloyId15"
    });
    $.__views.login.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        text: "Password",
        title: "Password",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.password_field = Ti.UI.createTextField({
        id: "password_field"
    });
    $.__views.__alloyId15.add($.__views.password_field);
    $.__views.__alloyId17 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "horizontal",
        top: "100",
        id: "__alloyId17"
    });
    $.__views.login.add($.__views.__alloyId17);
    $.__views.login = Ti.UI.createButton({
        title: "Login",
        id: "login"
    });
    $.__views.__alloyId17.add($.__views.login);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;