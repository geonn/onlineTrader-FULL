var args = arguments[0] || {};

//Active icon displayed
var orderlist = $.footer.getView('orderlist'); 
orderlist.image = "/images/icons/icon-neworder-active.png";

Ti.App.Properties.setString('module', 'dealer_orderlist');
Ti.App.Properties.setString('controller', "dealer_orderlist");
/**Experiment**/
Ti.App.fireEvent("getSession", {session:Ti.App.Properties.getString("session")});
/**End**/

Ti.App.addEventListener("app:viewOrderDetail", goToDetails);

//$.ptr.init($.tableView);

var actualHeight = $.orderlistview.evalJS("document.height;");

function goToDetails(e){
	
	var roles = Ti.App.Properties.getString('roles');
	var param = {
        o_id: e.o_id,
    };
	var orderdetail = Alloy.createController(roles + "_orderdetail",param).getView();
    
    setWindowRelationship(orderdetail);

};

function refreshPage(e){
	Ti.App.fireEvent('app:refreshPage');
}

///////////function////////////
var getData = function (data){
	var url = data.queryUrl;
	xhr.get(url, onSuccessCallback, onErrorCallback, { ttl: 60 });
};

var clearCache = function (data){
	xhr.clear(data.queryUrl);
};


var onSuccessCallback = function(e) {
	
	Ti.App.fireEvent('html:realDrawTable', { 
		data: JSON.parse(e.data),
	});
};

var onErrorCallback = function(e) {
	alert('no cache or connection lost');
	// Handle your errors in here
};
 
Ti.App.addEventListener('Ti:getData', getData); 
Ti.App.addEventListener('Ti:clearCache', clearCache);
 
$.orderlistview.addEventListener('load', function(data) { 
  	Ti.App.fireEvent('app:orderListParam', { 
		session: Ti.App.Properties.getString('session'), 
		url: Ti.API.GETDEALERORD + Ti.App.Properties.getString('session') + "&test",
	});
});

$.dealer_orderlist.addEventListener('close', function(e){				// when this window close, trigger this event to remove the event.
	Ti.App.removeEventListener('Ti:getData', getData);
	Ti.App.removeEventListener('Ti:clearCache', clearCache);
	Ti.App.removeEventListener('app:viewOrderDetail',goToDetails);

});

$.dealer_orderlist.addEventListener('androidback', function(e){				// when this window close, trigger this event to remove the event.
	Ti.App.removeEventListener('Ti:getData', getData);
	Ti.App.removeEventListener('Ti:clearCache', clearCache);
	Ti.App.removeEventListener('app:viewOrderDetail',goToDetails);
});