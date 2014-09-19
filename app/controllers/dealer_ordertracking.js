var args = arguments[0] || {};
o_id = Ti.App.Properties.getString('current_oid');
Ti.App.Properties.setString('controller', "dealer_ordertracking");
url = Ti.API.SETUNREAD + Ti.App.Properties.getString('session')+"&o_id=" + o_id;
xhr.get(url);

function construct() {
	Ti.App.fireEvent('app:trackingParam', { 
		o_id: o_id,
		tracking: Ti.API.GETTRACKING + Ti.App.Properties.getString('session')+"&o_id=" + o_id,
	});
	
}
