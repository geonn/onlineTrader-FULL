var args = arguments[0] || {};

//Active icon displayed
var orderlist = $.footer.getView('orderlist'); 
orderlist.image = "/images/icons/icon-dispatcher-mytask-active.png";

Ti.App.Properties.setString('module', 'dispatcher_orderlist');
/**Experiment**/
Ti.App.fireEvent("getSession", {session:Ti.App.Properties.getString("session")});
/**End**/
var goToDetails = function(e){
	
	var roles = Ti.App.Properties.getString('roles');
	var param = {
        o_id: e.o_id,
    };
	var orderdetail = Alloy.createController(roles + "_orderdetail",param).getView();
	
	setWindowRelationship(orderdetail);
};
Ti.App.addEventListener("app:viewOrderDetail", goToDetails);
//Ti.App.removeEventListener('app:viewOrderDetail',goToDetails);

$.orderlistview.addEventListener('load', function(data) { 
   Ti.App.fireEvent('app:dispatchrorderListParam', { 
		session: Ti.App.Properties.getString('session'), 
		url: Ti.API.GETDISPATCHORD + Ti.App.Properties.getString('session'),
	});
});

$.dealer_orderlist.addEventListener('close', function(e){				// when this window close, trigger this event to remove the event.
	Ti.App.removeEventListener('app:viewOrderDetail',goToDetails);
});

function refreshPage(e){
	Ti.App.fireEvent('app:dispatchRefreshPage');
}

if(Alloy.Globals.deviceHeight <= "480"){
	$.list_form.height="67%";
}