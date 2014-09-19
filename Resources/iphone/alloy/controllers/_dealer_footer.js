function Controller() {
    function expandMoreMenu(e) {
        if (expandMoreMenu.__isExecuting) return;
        expandMoreMenu.__isExecuting = true;
        if ("more" == e.source.mod) {
            $.subfooter.animate({
                bottom: 70,
                duration: 500
            }, function() {
                expandMoreMenu.__isExecuting = false;
            });
            $.more.image = "/images/icons/icon-more-active.png";
            e.source.mod = "more_active";
            Ti.App.Properties.setString("module", "dealer_more");
        } else {
            $.subfooter.animate({
                bottom: 0,
                duration: 500
            }, function() {
                expandMoreMenu.__isExecuting = false;
            });
            $.more.image = "/images/icons/icon-more.png";
            Ti.App.Properties.setString("module", "dealer_more");
            e.source.mod = "more";
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "_dealer_footer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.subfooter = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        bottom: 0,
        id: "subfooter"
    });
    $.__views.subfooter && $.addTopLevelView($.__views.subfooter);
    $.__views.settings = Ti.UI.createImageView({
        width: "20%",
        id: "settings",
        mod: "settings",
        left: "0",
        image: "/images/icons/icon-setting.png"
    });
    $.__views.subfooter.add($.__views.settings);
    goNav ? $.__views.settings.addEventListener("touchend", goNav) : __defers["$.__views.settings!touchend!goNav"] = true;
    $.__views.logout = Ti.UI.createImageView({
        width: "20%",
        id: "logout",
        mod: "logout",
        left: "20%",
        image: "/images/icons/icon-logout.png"
    });
    $.__views.subfooter.add($.__views.logout);
    doLogout ? $.__views.logout.addEventListener("touchend", doLogout) : __defers["$.__views.logout!touchend!doLogout"] = true;
    $.__views.footer = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer"
    });
    $.__views.footer && $.addTopLevelView($.__views.footer);
    $.__views.summary = Ti.UI.createImageView({
        width: "20%",
        id: "summary",
        mod: "summary",
        left: "0",
        image: "/images/icons/icon-summary.png"
    });
    $.__views.footer.add($.__views.summary);
    goNav ? $.__views.summary.addEventListener("touchend", goNav) : __defers["$.__views.summary!touchend!goNav"] = true;
    $.__views.orderlist = Ti.UI.createImageView({
        width: "20%",
        id: "orderlist",
        mod: "orderlist",
        left: "20%",
        image: "/images/icons/icon-neworder.png"
    });
    $.__views.footer.add($.__views.orderlist);
    goNav ? $.__views.orderlist.addEventListener("touchend", goNav) : __defers["$.__views.orderlist!touchend!goNav"] = true;
    $.__views.poslist = Ti.UI.createImageView({
        width: "20%",
        id: "poslist",
        mod: "poslist",
        left: "40%",
        image: "/images/icons/icon-pos.png"
    });
    $.__views.footer.add($.__views.poslist);
    goNav ? $.__views.poslist.addEventListener("touchend", goNav) : __defers["$.__views.poslist!touchend!goNav"] = true;
    $.__views.statistic = Ti.UI.createImageView({
        width: "20%",
        id: "statistic",
        mod: "statistic",
        left: "60%",
        image: "/images/icons/icon-ranking.png"
    });
    $.__views.footer.add($.__views.statistic);
    goNav ? $.__views.statistic.addEventListener("touchend", goNav) : __defers["$.__views.statistic!touchend!goNav"] = true;
    $.__views.more = Ti.UI.createImageView({
        width: "20%",
        id: "more",
        mod: "more",
        left: "80%",
        image: "/images/icons/icon-more.png"
    });
    $.__views.footer.add($.__views.more);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.more.addEventListener("click", expandMoreMenu);
    __defers["$.__views.settings!touchend!goNav"] && $.__views.settings.addEventListener("touchend", goNav);
    __defers["$.__views.logout!touchend!doLogout"] && $.__views.logout.addEventListener("touchend", doLogout);
    __defers["$.__views.summary!touchend!goNav"] && $.__views.summary.addEventListener("touchend", goNav);
    __defers["$.__views.orderlist!touchend!goNav"] && $.__views.orderlist.addEventListener("touchend", goNav);
    __defers["$.__views.poslist!touchend!goNav"] && $.__views.poslist.addEventListener("touchend", goNav);
    __defers["$.__views.statistic!touchend!goNav"] && $.__views.statistic.addEventListener("touchend", goNav);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;