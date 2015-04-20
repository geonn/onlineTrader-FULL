function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function sendTracking() {
        var dialog = Ti.UI.createAlertDialog({
            cancel: 1,
            buttonNames: [ "Cancel", "Confirm" ],
            message: "Are you sure want to submit tracking message?",
            title: "Send tracking message"
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel;
            if (1 === e.index) {
                var message = $.trackingMessage.getValue();
                if ("" == message) {
                    createAlert("Submit Error", "Please enter tracking message");
                    return;
                }
                $.activityIndicator.show();
                $.loadingBar.opacity = "1";
                $.loadingBar.height = "100";
                var strForm = "&o_id=" + o_id + "&msg=" + encodeURIComponent(message);
                var url = Ti.API.ADDTRACKING + Ti.App.Properties.getString("session") + strForm;
                console.log(url);
                var client = Ti.Network.createHTTPClient({
                    onload: function() {
                        alert("Tracking message submitted!");
                        $.activityIndicator.hide();
                        $.loadingBar.opacity = "0";
                        $.loadingBar.height = "0";
                        Ti.App.fireEvent("app:loadTrackingTable");
                        goBack();
                    },
                    onerror: function() {
                        $.activityIndicator.hide();
                        $.loadingBar.opacity = "0";
                        $.loadingBar.height = "0";
                        Ti.App.fireEvent("app:loadTrackingTable");
                        goBack();
                    },
                    timeout: 6e3
                });
                client.open("GET", url);
                client.send();
            }
        });
        dialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dispatcher_composetracking";
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
    $.__views.composetracking_win = Ti.UI.createWindow({
        fullscreen: false,
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "composetracking_win"
    });
    $.__views.composetracking_win && $.addTopLevelView($.__views.composetracking_win);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222",
        id: "header"
    });
    $.__views.composetracking_win.add($.__views.header);
    $.__views.backTitle = Ti.UI.createLabel({
        width: "25%",
        color: "#fff",
        left: "0%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "BACK",
        id: "backTitle"
    });
    $.__views.header.add($.__views.backTitle);
    goBack ? $.__views.backTitle.addEventListener("touchend", goBack) : __defers["$.__views.backTitle!touchend!goBack"] = true;
    $.__views.__alloyId99 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        right: 0,
        left: "25%",
        top: "0%",
        id: "__alloyId99"
    });
    $.__views.header.add($.__views.__alloyId99);
    $.__views.appTitle = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: "20dp"
        },
        text: "MESSAGE",
        id: "appTitle"
    });
    $.__views.header.add($.__views.appTitle);
    $.__views.__alloyId100 = Ti.UI.createView({
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL,
        right: 0,
        left: "75%",
        top: "0%",
        id: "__alloyId100"
    });
    $.__views.header.add($.__views.__alloyId100);
    $.__views.rightMenu = Ti.UI.createLabel({
        width: "25%",
        color: "#fff",
        left: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        },
        text: "SEND",
        id: "rightMenu",
        mod: "ordertracking"
    });
    $.__views.header.add($.__views.rightMenu);
    sendTracking ? $.__views.rightMenu.addEventListener("click", sendTracking) : __defers["$.__views.rightMenu!click!sendTracking"] = true;
    $.__views.content = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "16dp"
        },
        color: "#e02222",
        layout: "vertical",
        left: "5dp",
        right: "5dp",
        id: "content"
    });
    $.__views.composetracking_win.add($.__views.content);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "ADD TRACKING",
        id: "__alloyId101"
    });
    $.__views.content.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId102"
    });
    $.__views.content.add($.__views.__alloyId102);
    $.__views.loadingBar = Ti.UI.createView({
        layout: "vertical",
        id: "loadingBar",
        height: "0",
        width: "100",
        borderRadius: "15",
        top: "230",
        zIndex: "99",
        opacity: "0",
        backgroundColor: "#2E2E2E"
    });
    $.__views.composetracking_win.add($.__views.loadingBar);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        top: 15,
        left: 20,
        width: 60,
        id: "activityIndicator"
    });
    $.__views.loadingBar.add($.__views.activityIndicator);
    $.__views.__alloyId103 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#ffffff",
        text: "Loading",
        left: "20",
        top: "10",
        id: "__alloyId103"
    });
    $.__views.loadingBar.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        bottom: 2,
        height: "90%",
        top: "90",
        id: "__alloyId104"
    });
    $.__views.composetracking_win.add($.__views.__alloyId104);
    $.__views.trackingMessage = Ti.UI.createTextArea({
        id: "trackingMessage",
        suppressReturn: "false",
        borderWidth: "2",
        borderColor: "#bbb",
        borderRadius: "2",
        color: "#888",
        textAlign: "left",
        hintText: "Enter tracking message",
        top: "5",
        width: "90%",
        height: "150"
    });
    $.__views.__alloyId104.add($.__views.trackingMessage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    o_id = Ti.App.Properties.getString("current_oid");
    __defers["$.__views.backTitle!touchend!goBack"] && $.__views.backTitle.addEventListener("touchend", goBack);
    __defers["$.__views.rightMenu!click!sendTracking"] && $.__views.rightMenu.addEventListener("click", sendTracking);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;