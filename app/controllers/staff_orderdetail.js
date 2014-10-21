var args = arguments[0] || {};
var o_id = args.o_id || '';
Ti.App.Properties.setString('current_oid', o_id);
Ti.App.Properties.setString('controller', "dealer_orderdetail");

/**Event Listener**/
Ti.App.fireEvent("getSession", {session:Ti.App.Properties.getString("session")});

var showFooter = function(e) {
	//var ft = $.footer;
	 $.footer.setOpacity(1);
};
Ti.App.addEventListener('showFooter', showFooter);

/**End**/
url = Ti.API.SETUNREAD + Ti.App.Properties.getString('session')+"&o_id=" + o_id;
xhr.get(url);

$.orderdetailview.addEventListener('load', function(data) { 
	console.log(Ti.API.GETORDDETAILS + Ti.App.Properties.getString('session')+"&o_id=" + o_id);
   Ti.App.fireEvent('app:orderDetailsParam', { 
		session: Ti.App.Properties.getString('session'), 
		update: Ti.API.UPDATEORDER + Ti.App.Properties.getString('session'),
		details: Ti.API.GETORDDETAILS + Ti.App.Properties.getString('session')+"&o_id=" + o_id,
		state: Ti.API.GETSTATE,  
		product :Ti.API.GETPRODUCT,
		url: Ti.API.ADDTRACKING
	});
});

$.orderdetail_win.addEventListener('close', function(e){				// when this window close, trigger this event to remove the event.
	Ti.App.removeEventListener('showFooter',showFooter);
});

function orderCancel(){
	var dialog = Ti.UI.createAlertDialog({
		cancel: 1,
		buttonNames: ['No','Yes'],
		message: 'Are you sure want to cancel?',
		title: 'Order Delivery Status'
	});
	
	dialog.addEventListener('click', function(e){
		if (e.index === e.source.cancel){
		  //Do nothing
		}
		if (e.index === 1){
			callOrderAction(Ti.API.CANCELORDER);
		}
	});
	
	dialog.show();
}

function callOrderAction(action){
	var url = action + Ti.App.Properties.getString('session')+"&o_id=" + o_id;
	console.log(url);
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         
	         if(res.status == "success"){
	         	goBack();
	         	Ti.App.fireEvent('app:dispatchRefreshPage');
	         }else{
	         	alert("An known error occur. Please try again.");
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         alert("An known error occur. Please try again.");
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
}