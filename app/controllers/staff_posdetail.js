var args = arguments[0] || {};
var p_id = args.p_id || '';
Ti.App.Properties.setString('current_pid', p_id);

Ti.App.Properties.setString('module', 'dealer_poslist');
/**Experiment**/
Ti.App.fireEvent("getSession", {session:Ti.App.Properties.getString("session")});

/**End**/


$.posdetailview.addEventListener('load', function(data) { 
   Ti.App.fireEvent('app:posDetailsParam', { 
		session: Ti.App.Properties.getString('session'), 
		update: Ti.API.UPDATEPOS + Ti.App.Properties.getString('session'),
		details: Ti.API.GETPOSDETAIL + Ti.App.Properties.getString('session')+"&p_id=" + p_id,
		product :Ti.API.GETPRODUCT
	});
});
	
