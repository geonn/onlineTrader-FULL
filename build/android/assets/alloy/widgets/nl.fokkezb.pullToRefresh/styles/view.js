function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.pullToRefresh/" + s : s.substring(0, index) + "/nl.fokkezb.pullToRefresh/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Label",
    style: {
        width: Titanium.UI.FILL,
        color: "#e02222"
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "container",
    style: {
        backgroundColor: "white",
        navBarHidden: true
    }
}, {
    isClass: true,
    priority: 10000.0003,
    key: "ptr",
    style: {
        width: Ti.UI.FILL,
        height: 51,
        backgroundColor: "#F5F8FA"
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "header",
    style: {
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222"
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "ptrCenter",
    style: {
        bottom: 11,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        visible: false
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "ptrArrow",
    style: {
        left: 8,
        width: 12,
        height: 30,
        image: WPATH("/images/clean.png")
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "ptrIndicator",
    style: {
        left: 0,
        style: Ti.UI.ActivityIndicatorStyle.DARK
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "content",
    style: {
        top: "60dp",
        font: {
            fontSize: "14dp",
            fontFamily: "sans-serif"
        },
        color: "#525252",
        layout: "vertical",
        left: "5dp",
        right: "5dp"
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "h1",
    style: {
        font: {
            fontSize: "20dp"
        },
        color: "#fff",
        width: Titanium.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "ptrText",
    style: {
        left: 30,
        wordWrap: false,
        color: "#8899A6",
        font: {
            fontSize: 13
        }
    }
}, {
    isClass: true,
    priority: 10000.0009,
    key: "h2",
    style: {
        font: {
            fontSize: "18dp"
        },
        color: "#e02222",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
    }
}, {
    isClass: true,
    priority: 10000.0009,
    key: "ptrLine",
    style: {
        bottom: 0,
        height: 1,
        width: Ti.UI.FILL,
        backgroundColor: "#E1E8ED"
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "separator",
    style: {
        width: "100%",
        height: 1,
        backgroundColor: "#9d0404"
    }
}, {
    isClass: true,
    priority: 10000.0013,
    key: "border-line",
    style: {
        backgroundColor: "#e8e8e8",
        width: 1,
        height: Titanium.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0015,
    key: "rightNav",
    style: {
        left: "75%",
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "25%",
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        }
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "header",
    style: {
        height: "50dp",
        top: 0,
        backgroundColor: "#e02222"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "footer",
    style: {
        height: Titanium.UI.SIZE,
        bottom: 0,
        backgroundColor: "#e02222"
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "subfooter",
    style: {
        height: Titanium.UI.SIZE,
        bottom: 0
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "popupTitle",
    style: {
        top: "20",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        left: "20",
        font: {
            fontSize: "18dp"
        },
        color: "#fff"
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "activityIndicator",
    style: {
        color: "#888"
    }
}, {
    isId: true,
    priority: 100000.0014,
    key: "backTitle",
    style: {
        left: "0%",
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: "25%",
        height: Titanium.UI.FILL,
        font: {
            fontSize: "12dp"
        }
    }
} ];