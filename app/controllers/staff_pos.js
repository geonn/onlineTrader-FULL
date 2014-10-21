var args = arguments[0] || {};

//Active icon displayed
//var newpost = $.footer.getView('poslist'); 
//newpost.image = "/images/icons/icon-pos-active.png";

/**Experiment**/
Ti.App.fireEvent("getSession", {session:Ti.App.Properties.getString("session")});

var addOrderComplete = function(e) {
	goBack();
	Ti.App.fireEvent("app:refreshPage");
	Ti.App.removeEventListener('addOrderComplete',addOrderComplete);
};
Ti.App.addEventListener('addOrderComplete', addOrderComplete);
/**End**/

$.posview.addEventListener('load', function(data) { 
	//$.newpostview.evalJS("var message='George Milano';");
	
   Ti.App.fireEvent('app:PosParam', { 
		session: Ti.App.Properties.getString('session'), 
		url: Ti.API.ADDPOS, 
		state: Ti.API.GETSTATE,  
		product :Ti.API.GETPRODUCT,
		user : Ti.API.GETUSER +Ti.App.Properties.getString("session")
	});
});
	
var triggerAlert = function(e) {
	createAlert(e.tt,e.msg);
	Ti.App.removeEventListener('app:triggerAlert',triggerAlert);
};
Ti.App.addEventListener('app:triggerAlert', triggerAlert);
