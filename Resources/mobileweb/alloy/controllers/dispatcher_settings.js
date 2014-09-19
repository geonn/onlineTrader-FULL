function Controller() {
    function doLogout() {
        $.spinner.show();
        $.logoutButton.hide();
        var url = Ti.API.LOGOUT + Ti.App.Properties.getString("session");
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) {
                    Ti.App.Properties.removeProperty("session");
                    var login = Alloy.createController("index").getView();
                    login.open();
                } else alert(res.data);
            },
            onerror: function() {
                alert("error");
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dispatcher_settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.dispatcher_settings = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "dispatcher_settings"
    });
    $.__views.dispatcher_settings && $.addTopLevelView($.__views.dispatcher_settings);
    $.__views.footer = Alloy.createController("_header", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dispatcher_settings
    });
    $.__views.footer.setParent($.__views.dispatcher_settings);
    $.__views.content = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "16dp"
        },
        color: "#e02222",
        layout: "vertical",
        left: "10dp",
        right: "10dp",
        id: "content"
    });
    $.__views.dispatcher_settings.add($.__views.content);
<<<<<<< HEAD
    $.__views.__alloyId24 = Ti.UI.createLabel({
=======
    $.__views.__alloyId13 = Ti.UI.createLabel({
>>>>>>> master
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "SETTINGS",
<<<<<<< HEAD
        id: "__alloyId24"
    });
    $.__views.content.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createImageView({
=======
        id: "__alloyId13"
    });
    $.__views.content.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createImageView({
>>>>>>> master
        width: "100%",
        height: 1,
        borderWidth: 1,
        borderColor: "#9d0404",
        bottom: "30",
<<<<<<< HEAD
        id: "__alloyId25"
    });
    $.__views.content.add($.__views.__alloyId25);
=======
        id: "__alloyId14"
    });
    $.__views.content.add($.__views.__alloyId14);
>>>>>>> master
    $.__views.spinner = Ti.UI.createImageView({
        id: "spinner",
        image: "/images/loading.gif",
        width: "100"
    });
    $.__views.content.add($.__views.spinner);
<<<<<<< HEAD
    $.__views.__alloyId26 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "horizontal",
        top: "50",
        id: "__alloyId26"
    });
    $.__views.content.add($.__views.__alloyId26);
=======
    $.__views.__alloyId15 = Ti.UI.createView({
        backgroundColor: "white",
        layout: "horizontal",
        top: "50",
        id: "__alloyId15"
    });
    $.__views.content.add($.__views.__alloyId15);
>>>>>>> master
    $.__views.logoutButton = Ti.UI.createButton({
        id: "logoutButton",
        backgroundImage: "/images/btn-logout.png",
        width: "100%",
        height: "50dp"
    });
<<<<<<< HEAD
    $.__views.__alloyId26.add($.__views.logoutButton);
=======
    $.__views.__alloyId15.add($.__views.logoutButton);
>>>>>>> master
    doLogout ? $.__views.logoutButton.addEventListener("click", doLogout) : __defers["$.__views.logoutButton!click!doLogout"] = true;
    $.__views.footer = Alloy.createController("_dispatcher_footer", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dispatcher_settings
    });
    $.__views.footer.setParent($.__views.dispatcher_settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.spinner.visible = false;
    __defers["$.__views.logoutButton!click!doLogout"] && $.__views.logoutButton.addEventListener("click", doLogout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;