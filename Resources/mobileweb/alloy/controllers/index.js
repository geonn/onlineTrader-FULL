function Controller() {
    function doLogin() {
        var username = $.username.value;
        var password = $.password.value;
        if ("" == username || "" == password) {
            createAlert("Authentication warning", "Please fill in username and password");
            return;
        }
        var url = Ti.API.LOGIN + "&username=" + username + "&password=" + password;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) if ("admin" == res.data.roles) createAlert("Roles declined", "Your roles(admin) is not authorize for this app"); else {
                    Ti.App.Properties.setString("roles", res.data.roles);
                    Ti.App.Properties.setString("session", res.data.session);
                    var summary = Alloy.createController(res.data.roles + "_summary").getView();
                    summary.open();
                } else createAlert("Authentication warning", res.data);
            },
            onerror: function() {
<<<<<<< HEAD
=======
                var summary = Alloy.createController(res.data.roles + "_summary").getView();
                summary.open();
>>>>>>> master
                alert("error");
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.footer = Alloy.createController("_header", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.index
    });
    $.__views.footer.setParent($.__views.index);
<<<<<<< HEAD
    $.__views.__alloyId37 = Ti.UI.createView({
=======
    $.__views.__alloyId26 = Ti.UI.createView({
>>>>>>> master
        top: "60dp",
        font: {
            fontSize: "16dp"
        },
        color: "#e02222",
        layout: "vertical",
        left: "10dp",
        right: "10dp",
<<<<<<< HEAD
        id: "__alloyId37"
    });
    $.__views.index.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
=======
        id: "__alloyId26"
    });
    $.__views.index.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
>>>>>>> master
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "LOGIN",
<<<<<<< HEAD
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createImageView({
=======
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createImageView({
>>>>>>> master
        width: "100%",
        height: 1,
        borderWidth: 1,
        borderColor: "#9d0404",
        bottom: "30",
<<<<<<< HEAD
        id: "__alloyId39"
    });
    $.__views.__alloyId37.add($.__views.__alloyId39);
=======
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
>>>>>>> master
    $.__views.username = Ti.UI.createTextField({
        hintText: "Enter Username",
        height: "55dp",
        left: 10,
        bottom: 10,
        width: "90%",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "username"
    });
<<<<<<< HEAD
    $.__views.__alloyId37.add($.__views.username);
=======
    $.__views.__alloyId26.add($.__views.username);
>>>>>>> master
    $.__views.password = Ti.UI.createTextField({
        hintText: "Enter Password",
        passwordMask: true,
        height: "55dp",
        left: 10,
        width: "90%",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "password"
    });
<<<<<<< HEAD
    $.__views.__alloyId37.add($.__views.password);
    $.__views.__alloyId40 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "horizontal",
        top: "50",
        id: "__alloyId40"
    });
    $.__views.__alloyId37.add($.__views.__alloyId40);
=======
    $.__views.__alloyId26.add($.__views.password);
    $.__views.__alloyId29 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "horizontal",
        top: "50",
        id: "__alloyId29"
    });
    $.__views.__alloyId26.add($.__views.__alloyId29);
>>>>>>> master
    $.__views.button = Ti.UI.createButton({
        id: "button",
        backgroundImage: "/images/btn-login.png",
        width: "100%",
        height: "50dp"
    });
<<<<<<< HEAD
    $.__views.__alloyId40.add($.__views.button);
=======
    $.__views.__alloyId29.add($.__views.button);
>>>>>>> master
    doLogin ? $.__views.button.addEventListener("click", doLogin) : __defers["$.__views.button!click!doLogin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.index.open();
    __defers["$.__views.button!click!doLogin"] && $.__views.button.addEventListener("click", doLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;