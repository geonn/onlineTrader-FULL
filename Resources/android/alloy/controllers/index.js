function Controller() {
    function doLogin() {
        $.activityIndicator.show();
        var username = $.username.value;
        var password = $.password.value;
        if ("" == username || "" == password) {
            createAlert("Authentication warning", "Please fill in username and password");
            return;
        }
        var dt = Ti.App.Properties.getString("deviceToken");
        var url = Ti.API.LOGIN + "&username=" + username + "&password=" + password + "&deviceToken=" + dt;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) if ("admin" == res.data.roles) createAlert("Roles declined", "Your roles(admin) is not authorize for this app"); else {
                    Ti.App.Properties.setString("roles", res.data.roles);
                    Ti.App.Properties.setString("session", res.data.session);
                    "android" == Alloy.Globals.osname && subscribeDeviceToken(dt, res.data.roles);
                    if ("dealer" == res.data.roles) {
                        $.index.close();
                        var summary = Alloy.createController(res.data.roles + "_summary").getView();
                        setWindowRelationship(summary);
                    } else {
                        $.index.close();
                        var home = Alloy.createController(res.data.roles + "_home").getView();
                        setWindowRelationship(home);
                    }
                    null != payload && getNotificationNumber(payload);
                } else createAlert("Authentication warning", res.data);
            },
            onerror: function() {
                createAlert("Network declined", "Failed to contact with server. Please make sure your device are connected to internet.");
            },
            timeout: 1e4
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
        navBarHidden: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.appTitle = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: "20dp"
        },
        text: "LOGIN",
        id: "appTitle"
    });
    $.__views.header.add($.__views.appTitle);
    $.__views.content = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "14dp",
            fontFamily: "sans-serif"
        },
        color: "#525252",
        layout: "vertical",
        left: "5dp",
        right: "5dp",
        id: "content"
    });
    $.__views.index.add($.__views.content);
    $.__views.__alloyId137 = Ti.UI.createScrollView({
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true",
        height: "320",
        width: "100%",
        id: "__alloyId137"
    });
    $.__views.content.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createLabel({
        width: "120",
        color: "#e02222",
        backgroundImage: "/images/online-trader-logo.png",
        height: "120",
        bottom: "150",
        id: "__alloyId138"
    });
    $.__views.__alloyId137.add($.__views.__alloyId138);
    $.__views.username = Ti.UI.createTextField({
        height: "55dp",
        font: {
            fontSize: "14dp"
        },
        left: 10,
        color: "#000000",
        bottom: 75,
        backgroundColor: "#eee",
        width: "90%",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "username"
    });
    $.__views.__alloyId137.add($.__views.username);
    $.__views.usernamehint = Ti.UI.createLabel({
        width: "90%",
        color: "#333",
        left: 20,
        bottom: 95,
        font: {
            fontSize: "14dp"
        },
        text: "Enter Username",
        id: "usernamehint"
    });
    $.__views.__alloyId137.add($.__views.usernamehint);
    $.__views.password = Ti.UI.createTextField({
        passwordMask: true,
        height: "55dp",
        font: {
            fontSize: "14dp"
        },
        color: "#000000",
        backgroundColor: "#eee",
        left: 10,
        bottom: 10,
        width: "90%",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "password"
    });
    $.__views.__alloyId137.add($.__views.password);
    $.__views.passwordhint = Ti.UI.createLabel({
        width: "90%",
        color: "#333",
        left: 20,
        bottom: 30,
        font: {
            fontSize: "14dp"
        },
        text: "Enter Password",
        id: "passwordhint"
    });
    $.__views.__alloyId137.add($.__views.passwordhint);
    $.__views.btnLogin = Ti.UI.createButton({
        backgroundImage: "/images/btn-login.png",
        width: "90%",
        left: 10,
        id: "btnLogin"
    });
    $.__views.content.add($.__views.btnLogin);
    doLogin ? $.__views.btnLogin.addEventListener("click", doLogin) : __defers["$.__views.btnLogin!click!doLogin"] = true;
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        color: "#888",
        id: "activityIndicator",
        message: "Loading..."
    });
    $.__views.content.add($.__views.activityIndicator);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var ses = Ti.App.Properties.getString("session");
    Ti.App.Properties.getString("target");
    Ti.App.Properties.getString("extra");
    var payload = Ti.App.Payload;
    if (null == ses) $.index.open(); else {
        var url = Ti.API.CHECKSESSION + ses;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) {
                    var rl = Ti.App.Properties.getString("roles");
                    if ("dealer" == rl) {
                        $.index.close();
                        var summary = Alloy.createController(rl + "_summary").getView();
                        setWindowRelationship(summary);
                    } else {
                        $.index.close();
                        var home = Alloy.createController(rl + "_home").getView();
                        setWindowRelationship(home);
                    }
                    "" != payload;
                } else $.index.open();
            },
            onerror: function() {
                $.index.open();
            },
            timeout: 1e4
        });
        client.open("GET", url);
        client.send();
    }
    Ti.App.Properties.setString("module", "index");
    $.passwordhint.addEventListener("click", function() {
        $.passwordhint.visible = false;
        $.password.focus();
    });
    $.password.addEventListener("blur", function() {
        0 >= $.password.value && ($.passwordhint.visible = true);
    });
    $.password.addEventListener("focus", function() {
        $.passwordhint.visible = false;
        $.password.focus();
    });
    $.usernamehint.addEventListener("click", function() {
        $.usernamehint.visible = false;
        $.username.focus();
    });
    $.username.addEventListener("blur", function() {
        0 >= $.username.value && ($.usernamehint.visible = true);
    });
    $.username.addEventListener("focus", function() {
        $.usernamehint.visible = false;
        $.username.focus();
    });
    __defers["$.__views.btnLogin!click!doLogin"] && $.__views.btnLogin.addEventListener("click", doLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;