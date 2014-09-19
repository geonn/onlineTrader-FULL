function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "_dispatcher_footer";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
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
    $.__views.home = Ti.UI.createImageView({
        width: "20%",
        id: "home",
        mod: "home",
        left: "10%",
        image: "/images/icons/icon-dispatcher-task.png"
    });
    $.__views.footer.add($.__views.home);
    goNav ? $.__views.home.addEventListener("click", goNav) : __defers["$.__views.home!click!goNav"] = true;
    $.__views.orderlist = Ti.UI.createImageView({
        width: "20%",
        id: "orderlist",
        mod: "orderlist",
        left: "30%",
        image: "/images/icons/icon-dispatcher-mytask.png"
    });
    $.__views.footer.add($.__views.orderlist);
    goNav ? $.__views.orderlist.addEventListener("click", goNav) : __defers["$.__views.orderlist!click!goNav"] = true;
    $.__views.summary = Ti.UI.createImageView({
        width: "20%",
        id: "summary",
        mod: "summary",
        left: "50%",
        image: "/images/icons/icon-summary.png"
    });
    $.__views.footer.add($.__views.summary);
    goNav ? $.__views.summary.addEventListener("click", goNav) : __defers["$.__views.summary!click!goNav"] = true;
    $.__views.logout = Ti.UI.createImageView({
        width: "20%",
        id: "logout",
        mod: "logout",
        left: "70%",
        image: "/images/icons/icon-logout.png"
    });
    $.__views.footer.add($.__views.logout);
    doLogout ? $.__views.logout.addEventListener("click", doLogout) : __defers["$.__views.logout!click!doLogout"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.home!click!goNav"] && $.__views.home.addEventListener("click", goNav);
    __defers["$.__views.orderlist!click!goNav"] && $.__views.orderlist.addEventListener("click", goNav);
    __defers["$.__views.summary!click!goNav"] && $.__views.summary.addEventListener("click", goNav);
    __defers["$.__views.logout!click!doLogout"] && $.__views.logout.addEventListener("click", doLogout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;