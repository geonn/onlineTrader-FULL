var args = arguments[0] || {};

//Active icon displayed
//var newpost = $.footer.getView('orderlist'); 
//newpost.image = "/images/icons/icon-listing-active.png";
//Ti.App.Properties.setString('module', 'dealer_newpost');
/**Experiment**/
Ti.App.fireEvent("getSession", {session:Ti.App.Properties.getString("session")});

var addOrderComplete = function(e) {
	goBack();
	
};
Ti.App.addEventListener('addOrderComplete', addOrderComplete);
/**End**/


$.newpostview.addEventListener('load', function(data) { 
	//$.newpostview.evalJS("var message='George Milano';");
	
   Ti.App.fireEvent('app:newPostParam', { 
		session: Ti.App.Properties.getString('session'), 
		url: Ti.API.ADDORDER, 
		state: Ti.API.GETSTATE,  
		product :Ti.API.GETPRODUCT
	});
});

$.dealer_newpost.addEventListener('close', function(e){				// when this window close, trigger this event to remove the event.
	Ti.App.removeEventListener('addOrderComplete',addOrderComplete);
});

var triggerAlert = function(e) {
	createAlert(e.tt,e.msg);
	Ti.App.removeEventListener('app:triggerAlert',triggerAlert);
};
Ti.App.addEventListener('app:triggerAlert', triggerAlert);
