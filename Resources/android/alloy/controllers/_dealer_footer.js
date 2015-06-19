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
    this.__controllerPath = "_dealer_footer";
    this.args = arguments[0] || {};
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
    $.__views.footer = Ti.UI.createScrollView({
        height: 64,
        width: Titanium.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        contentWidth: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        horizontalWrap: "false",
        showHorizontalScrollIndicator: "true",
        showVerticalScrollIndicator: "false"
    });
    $.__views.footer && $.addTopLevelView($.__views.footer);
    $.__views.summary = Ti.UI.createImageView({
        width: "64",
        id: "summary",
        mod: "summary",
        image: "/images/icons/icon-summary.png"
    });
    $.__views.footer.add($.__views.summary);
    goNav ? $.__views.summary.addEventListener("click", goNav) : __defers["$.__views.summary!click!goNav"] = true;
    $.__views.orderlist = Ti.UI.createImageView({
        width: "64",
        id: "orderlist",
        mod: "orderlist",
        image: "/images/icons/icon-neworder.png"
    });
    $.__views.footer.add($.__views.orderlist);
    goNav ? $.__views.orderlist.addEventListener("click", goNav) : __defers["$.__views.orderlist!click!goNav"] = true;
    $.__views.poslist = Ti.UI.createImageView({
        width: "64",
        id: "poslist",
        mod: "poslist",
        image: "/images/icons/icon-pos.png"
    });
    $.__views.footer.add($.__views.poslist);
    goNav ? $.__views.poslist.addEventListener("click", goNav) : __defers["$.__views.poslist!click!goNav"] = true;
    $.__views.feed = Ti.UI.createImageView({
        width: "64",
        id: "feed",
        mod: "feed",
        image: "/images/icons/icon-feed.png"
    });
    $.__views.footer.add($.__views.feed);
    goNav ? $.__views.feed.addEventListener("click", goNav) : __defers["$.__views.feed!click!goNav"] = true;
    $.__views.statistic = Ti.UI.createImageView({
        width: "64",
        id: "statistic",
        mod: "statistic",
        image: "/images/icons/icon-ranking.png"
    });
    $.__views.footer.add($.__views.statistic);
    goNav ? $.__views.statistic.addEventListener("click", goNav) : __defers["$.__views.statistic!click!goNav"] = true;
    $.__views.settings = Ti.UI.createImageView({
        width: "64",
        id: "settings",
        mod: "settings",
        image: "/images/icons/icon-setting.png"
    });
    $.__views.footer.add($.__views.settings);
    goNav ? $.__views.settings.addEventListener("click", goNav) : __defers["$.__views.settings!click!goNav"] = true;
    $.__views.logout = Ti.UI.createImageView({
        width: "64",
        id: "logout",
        mod: "logout",
        image: "/images/icons/icon-logout.png"
    });
    $.__views.footer.add($.__views.logout);
    doLogout ? $.__views.logout.addEventListener("click", doLogout) : __defers["$.__views.logout!click!doLogout"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.summary!click!goNav"] && $.__views.summary.addEventListener("click", goNav);
    __defers["$.__views.orderlist!click!goNav"] && $.__views.orderlist.addEventListener("click", goNav);
    __defers["$.__views.poslist!click!goNav"] && $.__views.poslist.addEventListener("click", goNav);
    __defers["$.__views.feed!click!goNav"] && $.__views.feed.addEventListener("click", goNav);
    __defers["$.__views.statistic!click!goNav"] && $.__views.statistic.addEventListener("click", goNav);
    __defers["$.__views.settings!click!goNav"] && $.__views.settings.addEventListener("click", goNav);
    __defers["$.__views.logout!click!doLogout"] && $.__views.logout.addEventListener("click", doLogout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;