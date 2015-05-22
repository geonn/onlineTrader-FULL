function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doLogin() {
        $.activityIndicator.show();
        $.loadingBar.opacity = "1";
        $.loadingBar.height = "100";
        var username = $.username.value;
        var password = $.password.value;
        if ("" == username || "" == password) {
            $.activityIndicator.hide();
            $.loadingBar.opacity = "0";
            $.loadingBar.height = "0";
            createAlert("Authentication warning", "Please fill in username and password");
            return;
        }
        var dt = Ti.App.Properties.getString("deviceToken");
        var url = Ti.API.LOGIN + "&username=" + username + "&password=" + password + "&deviceToken=" + dt;
        console.log(url);
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) {
                    if ("admin" == res.data.roles) createAlert("Roles declined", "Your roles(admin) is not authorize for this app"); else {
                        Ti.App.Properties.setString("roles", res.data.roles);
                        Ti.App.Properties.setString("session", res.data.session);
                        "android" == Alloy.Globals.osname && subscribeDeviceToken(dt, res.data.roles);
                        if ("dealer" == res.data.roles || "staff" == res.data.roles) {
                            var summary = Alloy.createController(res.data.roles + "_summary").getView();
                            setWindowRelationship(summary);
                        } else {
                            var home = Alloy.createController(res.data.roles + "_home").getView();
                            setWindowRelationship(home);
                        }
                        null != payload && getNotificationNumber(payload);
                    }
                    $.activityIndicator.hide();
                    $.loadingBar.opacity = "0";
                    $.loadingBar.height = "0";
                } else {
                    createAlert("Authentication warning", res.data);
                    $.activityIndicator.hide();
                    $.loadingBar.opacity = "0";
                    $.loadingBar.height = "0";
                }
            },
            onerror: function() {
                $.activityIndicator.hide();
                $.loadingBar.opacity = "0";
                $.loadingBar.height = "0";
                createAlert("Network declined", "Failed to contact with server. Please make sure your device are connected to internet.");
            },
            timeout: 6e4
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        fullscreen: false,
        backgroundImage: "/images/bg.jpg",
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
    $.__views.loadingBar = Ti.UI.createView({
        layout: "vertical",
        id: "loadingBar",
        height: "0",
        width: "100",
        borderRadius: "15",
        top: "230",
        zIndex: "99",
        opacity: "1",
        backgroundColor: "#2E2E2E"
    });
    $.__views.index.add($.__views.loadingBar);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        top: 15,
        left: 20,
        width: 60,
        id: "activityIndicator"
    });
    $.__views.loadingBar.add($.__views.activityIndicator);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#ffffff",
        text: "Loading",
        left: "20",
        top: "10",
        id: "__alloyId163"
    });
    $.__views.loadingBar.add($.__views.__alloyId163);
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
    $.__views.__alloyId164 = Ti.UI.createScrollView({
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true",
        height: "320",
        width: "100%",
        id: "__alloyId164"
    });
    $.__views.content.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createLabel({
        width: "120",
        color: "#e02222",
        backgroundImage: "/images/online-trader-logo.png",
        height: "120",
        bottom: "150",
        id: "__alloyId165"
    });
    $.__views.__alloyId164.add($.__views.__alloyId165);
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
    $.__views.__alloyId164.add($.__views.username);
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
    $.__views.__alloyId164.add($.__views.usernamehint);
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
    $.__views.__alloyId164.add($.__views.password);
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
    $.__views.__alloyId164.add($.__views.passwordhint);
    $.__views.btnLogin = Ti.UI.createButton({
        backgroundImage: "/images/btn-login.png",
        width: "90%",
        left: 10,
        id: "btnLogin"
    });
    $.__views.content.add($.__views.btnLogin);
    doLogin ? $.__views.btnLogin.addEventListener("click", doLogin) : __defers["$.__views.btnLogin!click!doLogin"] = true;
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
                    if ("dealer" == rl || "staff" == rl) {
                        var summary = Alloy.createController(rl + "_summary").getView();
                        setWindowRelationship(summary);
                    } else {
                        var home = Alloy.createController(rl + "_home").getView();
                        setWindowRelationship(home);
                    }
                    "" != payload;
                } else $.index.open();
            },
            onerror: function(e) {
                console.log(e);
                $.index.open();
            },
            timeout: 1e5
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
        $.password.value <= 0 && ($.passwordhint.visible = true);
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
        $.username.value <= 0 && ($.usernamehint.visible = true);
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