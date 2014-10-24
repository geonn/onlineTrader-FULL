function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function loadTableRow(data) {
        var tableData = [];
        for (var i = 0; i < data.length; i++) {
            var row = Ti.UI.createTableViewRow({
                className: "forumEvent",
                rowIndex: i,
                selectionStyle: 0,
                separatorColor: "#ccc",
                width: "100%",
                day: data[i]["date"]
            });
            var lblField = Ti.UI.createLabel({
                text: data[i]["date"],
                color: "#222",
                top: "10dp",
                left: "10dp"
            });
            var lblField2 = Ti.UI.createLabel({
                realValue: "Value",
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                top: "10dp",
                width: "20%",
                left: "80%",
                text: data[i]["value"],
                color: "#222"
            });
            var separator = Ti.UI.createView({
                top: 49,
                backgroundColor: "#9d0404",
                height: 1
            });
            row.add(lblField);
            row.add(lblField2);
            row.add(separator);
            tableData.push(row);
        }
        $.tableView.setData(tableData);
    }
    function getSummary() {
        var url = Ti.API.GETDAILYSUMMARYBYMONTH + Ti.App.Properties.getString("session") + "&date=" + date;
        var data = [];
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                console.log(this.responseText);
                if ("Success" == res.status) {
                    for (var key in res.data) {
                        var obj = res.data[key];
                        data.push({
                            date: obj.date,
                            value: obj.commission
                        });
                    }
                    loadTableRow(data);
                } else {
                    alert(res.status);
                    createAlert("Error", res.status);
                }
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
    this.__controllerPath = "dispatcher_monthly_commission_detail";
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
    $.__views.dispatcher_monthly_commission_detail = Ti.UI.createWindow({
        backgroundImage: "/images/bg.jpg",
        navBarHidden: true,
        id: "dispatcher_monthly_commission_detail"
    });
    $.__views.dispatcher_monthly_commission_detail && $.addTopLevelView($.__views.dispatcher_monthly_commission_detail);
    $.__views.footer = Alloy.createController("_subheader", {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222",
        id: "footer",
        __parentSymbol: $.__views.dispatcher_monthly_commission_detail
    });
    $.__views.footer.setParent($.__views.dispatcher_monthly_commission_detail);
    $.__views.__alloyId101 = Ti.UI.createView({
        top: "60dp",
        font: {
            fontSize: "14dp",
            fontFamily: "sans-serif"
        },
        color: "#525252",
        layout: "vertical",
        left: "5dp",
        right: "5dp",
        height: "88%",
        id: "__alloyId101"
    });
    $.__views.dispatcher_monthly_commission_detail.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        color: "#e02222",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "MONTHLY COMMISSION DETAIL",
        id: "__alloyId102"
    });
    $.__views.__alloyId101.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createImageView({
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404",
        id: "__alloyId103"
    });
    $.__views.__alloyId101.add($.__views.__alloyId103);
    $.__views.tableView = Ti.UI.createTableView({
        width: "100%",
        id: "tableView"
    });
    $.__views.__alloyId101.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var date = args.date || "";
    getSummary();
    $.tableView.addEventListener("touchend", function(e) {
        var prop = e.rowData.day;
        var param = {
            date: prop,
            from: "monthlyCommission"
        };
        var dailyCommission = Alloy.createController("dispatcher_daily_commission", param).getView();
        setWindowRelationship(dailyCommission);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;