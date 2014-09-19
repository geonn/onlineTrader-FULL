var args = arguments[0] || {};
var o_id = Ti.App.Properties.getString('current_oid');

//var o_id = args.o_id || '';

url = Ti.API.SETUNREAD + Ti.App.Properties.getString('session')+"&o_id=" + o_id;
xhr.get(url);

function construct() {
	console.log(Ti.API.GETTRACKING + Ti.App.Properties.getString('session')+"&o_id=" + o_id);
	Ti.App.fireEvent('app:trackingParam', { 
		o_id: o_id,
		tracking: Ti.API.GETTRACKING + Ti.App.Properties.getString('session')+"&o_id=" + o_id,
	});
}
