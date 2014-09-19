function goNav(event) {
    var page = event.source.mod;
    var roles = Ti.App.Properties.getString("roles");
    page = roles + "_" + page;
    var navigate = Alloy.createController(page).getView();
    navigate.open();
}

function createAlert(tt, msg) {
    var box = Titanium.UI.createAlertDialog({
        title: tt,
        message: msg
    });
    box.show();
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Ti.API.API_DOMAIN = "biomas.com.my";

Ti.API.USER = "biomas";

Ti.API.KEY = "06b53047cf294f7207789ff5293ad2dc";

Ti.API.LOGIN = "http://" + Ti.API.API_DOMAIN + "/mobile/api/loginUser?user=" + Ti.API.USER + "&key=" + Ti.API.KEY;

Ti.API.LOGOUT = "http://" + Ti.API.API_DOMAIN + "/mobile/api/logoutUser?user=" + Ti.API.USER + "&key=" + Ti.API.KEY + "&session=";

Alloy.createController("index");