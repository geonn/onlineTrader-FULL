function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function chooseState() {
        dialog = Titanium.UI.createOptionDialog({
            destructive: 0,
            options: stateArr,
            title: "Please choose your preferred state"
        });
        dialog.addEventListener("click", function(e) {
            $.prefer_state.value = stateArr[e.index];
        });
        dialog.show();
    }
    function chooseMState() {
        dialog = Titanium.UI.createOptionDialog({
            destructive: 0,
            options: mstateArr,
            title: "Please choose your state"
        });
        dialog.addEventListener("click", function(e) {
            $.state.value = mstateArr[e.index];
        });
        dialog.show();
    }
    function doUpdates() {
        var dealer_id = $.dealer_id.value;
        var fullname = $.fullname.value;
        var mobile = $.mobile.value;
        var prefer_state = $.prefer_state.value;
        var new_password = $.new_password.value;
        var confirm_password = $.confirm_password.value;
        var state = $.state.value;
        var address = $.address.value;
        var city = $.city.value;
        var postcode = $.postcode.value;
        if ("" == fullname) {
            createAlert("Request Rejected", "Full name cannot be empty.");
            return;
        }
        if ("" == mobile) {
            createAlert("Request Rejected", "Mobile number cannot be empty.");
            return;
        }
        if ("" != new_password && new_password != confirm_password) {
            createAlert("Request Rejected", "Both password must be match.");
            return;
        }
        var url = Ti.API.UPDATEUSER + Ti.App.Properties.getString("session") + "&dealer_id=" + dealer_id + "&fullname=" + fullname + "&mobile=" + mobile + "&prefer_state=" + prefer_state + "&password=" + new_password + "&address=" + address + "&city=" + city + "&postcode=" + postcode + "&state=" + state;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                "success" == res.status && createAlert("Profile Updates", "Your changes successfully saved.");
            },
            onerror: function() {
                createAlert("Network declined", "Failed to contact with server. Please make sure your device are connected to internet.");
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dealer_settings";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.dealer_settings = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "dealer_settings"
    });
    $.__views.dealer_settings && $.addTopLevelView($.__views.dealer_settings);
    $.__views.footer = Alloy.createController("_header", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_settings
    });
    $.__views.footer.setParent($.__views.dealer_settings);
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
    $.__views.dealer_settings.add($.__views.content);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "SETTINGS",
        id: "__alloyId47"
    });
    $.__views.content.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        bottom: "5",
        id: "__alloyId48"
    });
    $.__views.content.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createScrollView({
        layout: "vertical",
        height: "78%",
        width: "100%",
        id: "__alloyId49"
    });
    $.__views.content.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "vertical",
        top: "5",
        height: "50",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        width: "auto",
        color: "#000000",
        left: 10,
        text: "Dealer ID",
        title: "Name",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.dealer_id = Ti.UI.createLabel({
        width: "auto",
        color: "#585858",
        left: 10,
        id: "dealer_id"
    });
    $.__views.__alloyId50.add($.__views.dealer_id);
    $.__views.__alloyId52 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId52"
    });
    $.__views.__alloyId49.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        width: "auto",
        color: "#000000",
        left: 10,
        text: "Dealer name",
        title: "Name",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.fullname = Ti.UI.createTextField({
        height: "35dp",
        left: 10,
        font: {
            fontSize: "14dp"
        },
        width: "90%",
        color: "#000000",
        backgroundColor: "#eee",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "fullname",
        value: "",
        hintText: "Enter Fullname"
    });
    $.__views.__alloyId52.add($.__views.fullname);
    $.__views.__alloyId54 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId54"
    });
    $.__views.__alloyId49.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        width: "auto",
        color: "#000000",
        left: 10,
        text: "Contact Number",
        title: "Contact",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.mobile = Ti.UI.createTextField({
        height: "35dp",
        font: {
            fontSize: "14dp"
        },
        left: 10,
        width: "90%",
        color: "#000000",
        backgroundColor: "#eee",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "mobile",
        value: "",
        hintText: "Enter Mobile Number"
    });
    $.__views.__alloyId54.add($.__views.mobile);
    $.__views.__alloyId56 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId56"
    });
    $.__views.__alloyId49.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        width: "auto",
        color: "#000000",
        left: 10,
        text: "Address",
        title: "Address",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.address = Ti.UI.createTextField({
        height: "35dp",
        left: 10,
        font: {
            fontSize: "14dp"
        },
        width: "90%",
        color: "#000000",
        backgroundColor: "#eee",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "address",
        value: ""
    });
    $.__views.__alloyId56.add($.__views.address);
    $.__views.__alloyId58 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId58"
    });
    $.__views.__alloyId49.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        width: "auto",
        color: "#000000",
        left: 10,
        text: "City",
        title: "City",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.city = Ti.UI.createTextField({
        height: "35dp",
        left: 10,
        font: {
            fontSize: "14dp"
        },
        width: "90%",
        color: "#000000",
        backgroundColor: "#eee",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "city",
        value: ""
    });
    $.__views.__alloyId58.add($.__views.city);
    $.__views.__alloyId60 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId60"
    });
    $.__views.__alloyId49.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        width: "auto",
        color: "#000000",
        left: 10,
        text: "Postcode",
        title: "Postcode",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.postcode = Ti.UI.createTextField({
        height: "35dp",
        font: {
            fontSize: "14dp"
        },
        left: 10,
        width: "90%",
        color: "#000000",
        backgroundColor: "#eee",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "postcode",
        hintText: "Enter Postcode",
        value: ""
    });
    $.__views.__alloyId60.add($.__views.postcode);
    $.__views.__alloyId62 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId62"
    });
    $.__views.__alloyId49.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        width: "auto",
        color: "#000000",
        left: 10,
        text: "State",
        title: "State",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.state = Ti.UI.createTextField({
        height: "35dp",
        left: 10,
        font: {
            fontSize: "14dp"
        },
        width: "90%",
        color: "#000000",
        backgroundColor: "#eee",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "state",
        editable: "false",
        hintText: "Choose State"
    });
    $.__views.__alloyId62.add($.__views.state);
    chooseMState ? $.__views.state.addEventListener("click", chooseMState) : __defers["$.__views.state!click!chooseMState"] = true;
    $.__views.__alloyId64 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId64"
    });
    $.__views.__alloyId49.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        width: "auto",
        color: "#000000",
        left: 10,
        text: "Preferred State",
        title: "Contact",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.prefer_state = Ti.UI.createTextField({
        height: "35dp",
        left: 10,
        font: {
            fontSize: "14dp"
        },
        width: "90%",
        color: "#000000",
        backgroundColor: "#eee",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "prefer_state",
        editable: "false",
        hintText: "Choose Preferred State"
    });
    $.__views.__alloyId64.add($.__views.prefer_state);
    chooseState ? $.__views.prefer_state.addEventListener("click", chooseState) : __defers["$.__views.prefer_state!click!chooseState"] = true;
    $.__views.__alloyId66 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId66"
    });
    $.__views.__alloyId49.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        width: "auto",
        color: "#000000",
        left: 10,
        text: "New Password",
        title: "Email",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.new_password = Ti.UI.createTextField({
        passwordMask: true,
        height: "35dp",
        font: {
            fontSize: "14dp"
        },
        left: 10,
        width: "90%",
        color: "#000000",
        backgroundColor: "#eee",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "new_password",
        hintText: "Enter New Password",
        value: ""
    });
    $.__views.__alloyId66.add($.__views.new_password);
    $.__views.__alloyId68 = Ti.UI.createView({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "horizontal",
        height: "60",
        id: "__alloyId68"
    });
    $.__views.__alloyId49.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        width: "auto",
        color: "#000000",
        left: 10,
        text: "Confirm Password",
        title: "Email",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.confirm_password = Ti.UI.createTextField({
        passwordMask: true,
        height: "35dp",
        font: {
            fontSize: "14dp"
        },
        left: 10,
        width: "90%",
        color: "#000000",
        backgroundColor: "#eee",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "confirm_password",
        hintText: "Enter Confirm Password",
        value: ""
    });
    $.__views.__alloyId68.add($.__views.confirm_password);
    $.__views.updateButton = Ti.UI.createButton({
        id: "updateButton",
        backgroundImage: "/images/btn-update.png",
        top: "20",
        width: "90%"
    });
    $.__views.__alloyId49.add($.__views.updateButton);
    doUpdates ? $.__views.updateButton.addEventListener("click", doUpdates) : __defers["$.__views.updateButton!click!doUpdates"] = true;
    $.__views.r_sub_footer = Alloy.createController("_dealer_subfooter", {
        id: "r_sub_footer",
        __parentSymbol: $.__views.dealer_settings
    });
    $.__views.r_sub_footer.setParent($.__views.dealer_settings);
    $.__views.footer = Alloy.createController("_dealer_footer", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dealer_settings
    });
    $.__views.footer.setParent($.__views.dealer_settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var more = $.footer.getView("more");
    more.image = "/images/icons/icon-more-active.png";
    var settings = $.footer.getView("settings");
    settings.image = "/images/icons/icon-setting-active.png";
    Ti.App.Properties.setString("module", "dealer_settings");
    var url = Ti.API.GETUSER + Ti.App.Properties.getString("session");
    stateArr = [];
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var res = JSON.parse(this.responseText);
            $.dealer_id.text = res.data.dealer_id;
            $.fullname.value = res.data.fullname;
            $.mobile.value = res.data.mobile;
            $.address.value = res.data.address;
            $.city.value = res.data.city;
            $.postcode.value = res.data.postcode;
            $.state.value = res.data.states;
            $.prefer_state.value = res.data.userState;
            stateArr = res.data.stateList;
            mstateArr = res.data.mstateList;
        },
        onerror: function() {
            createAlert("Network declined", "Failed to contact with server. Please make sure your device are connected to internet.");
        },
        timeout: 1e4
    });
    client.open("GET", url);
    client.send();
    __defers["$.__views.state!click!chooseMState"] && $.__views.state.addEventListener("click", chooseMState);
    __defers["$.__views.prefer_state!click!chooseState"] && $.__views.prefer_state.addEventListener("click", chooseState);
    __defers["$.__views.updateButton!click!doUpdates"] && $.__views.updateButton.addEventListener("click", doUpdates);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;