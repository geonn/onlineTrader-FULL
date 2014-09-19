var args = arguments[0] || {};

//Active icon displayed
var home = $.footer.getView('home'); 
home.image = "/images/icons/icon-dispatcher-task-active.png";
Ti.App.Properties.setString('module', 'dispatcher_home');

$.dis_home.addEventListener('load', function(data) {
	console.log('why duplicate');
	Ti.App.fireEvent("html:dispatchHomeInit", {
		session: Ti.App.Properties.getString('session'), 
		url: Ti.API.GETPNDORDER + Ti.App.Properties.getString('session'),
		pick: Ti.API.PICKORDER + Ti.App.Properties.getString('session'),
		state: Ti.API.GETSTATE,  
	});
});


function refreshPage(e){
	Ti.App.fireEvent('app:refreshPage');
}

