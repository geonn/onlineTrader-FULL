var args = arguments[0] || {};
var o_id = args.o_id || '';

Ti.App.Properties.setString('current_oid', o_id); 
url = Ti.API.SETUNREAD + Ti.App.Properties.getString('session')+"&o_id=" + o_id;
xhr.get(url);

var showFooter = function(e) {
	//var ft = $.footer;
	 $.footer.setOpacity(1);
};
Ti.App.addEventListener('showFooter', showFooter);


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
			callOrderAction(Ti.API.REQUESTCANCEL,'cancel','');
		}
	});
	
	dialog.show();
}

function orderRelease(){
	var textfield = Ti.UI.createTextField();
	var dialog = Ti.UI.createAlertDialog({
		cancel: 1,
		androidView: textfield,
		buttonNames: ['No','Yes'],
		message: 'Please fill in reason of release',
		title: 'Release Order'
	});
	
	dialog.addEventListener('click', function(e){
		if (e.index === e.source.cancel){
		  //Do nothing
		}
		if (e.index === 1){
			reasonField = textfield.value;
			 
			if(reasonField.trim() == ""){
				 alert("Please fill in release reason.");
				 return false;
			}else{
				callOrderAction(Ti.API.RELEASEORDER,'release',{reason:reasonField });
			}
			
		}
	});
	
	dialog.show();
}

function orderComplete(){
	var dialog = Ti.UI.createAlertDialog({
		cancel: 1,
		buttonNames: ['Cancel','Completed'],
		message: 'Mission Accomplished?',
		title: 'Order Delivery Status'
	});
	
	dialog.addEventListener('click', function(e){
		if (e.index === e.source.cancel){
		  //Do nothing
		}
		if (e.index === 1){
			callOrderAction(Ti.API.COMPLETEORDER,'complete','');
		}
	});
	
	dialog.show();
}

function callOrderAction(action, actionName,params){
	if(actionName == "release"){
		var url = action + Ti.App.Properties.getString('session')+"&o_id=" + o_id+"&reason="+params.reason;
	}else{
		var url = action + Ti.App.Properties.getString('session')+"&o_id=" + o_id;
	} 
	
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         
	         if(res.status == "success"){
	         	goBack();
	         	//Ti.App.fireEvent('app:dispatchRefreshPage');
	         }else{
	         	alert("An known error occur. Please try again.");
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         alert("An known error occur. Please try again.");
	     },
	     timeout : 60000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
}

$.orderdetailview.addEventListener('load', function(data) { 
   Ti.App.fireEvent('app:orderDetailsParam', { 
		session: Ti.App.Properties.getString('session'), 
		update: Ti.API.UPDATEORDER + Ti.App.Properties.getString('session'),
		details: Ti.API.GETORDDETAILS + Ti.App.Properties.getString('session')+"&o_id=" + o_id,
		complete: Ti.API.COMPLETEORDER + Ti.App.Properties.getString('session')+"&o_id=" + o_id,
		cancel: Ti.API.REQUESTCANCEL + Ti.App.Properties.getString('session')+"&o_id=" + o_id,
		state: Ti.API.GETSTATE,  
		product :Ti.API.GETPRODUCT
	});
});
	
function construct() {
	Ti.App.fireEvent('app:orderDetailsParam', { 
		o_id   : o_id,
		session: Ti.App.Properties.getString('session'), 
		update: Ti.API.UPDATEORDER + Ti.App.Properties.getString('session'), 
		details: Ti.API.GETORDDETAILS + Ti.App.Properties.getString('session')+"&o_id=" + o_id,
		complete: Ti.API.COMPLETEORDER + Ti.App.Properties.getString('session')+"&o_id=" + o_id,
		cancel: Ti.API.REQUESTCANCEL + Ti.App.Properties.getString('session')+"&o_id=" + o_id,
		state: Ti.API.GETSTATE,  
		product :Ti.API.GETPRODUCT
	});
	
}

$.dis_orderdetail_win.addEventListener('close', function(e){				// when this window close, trigger this event to remove the event.
	Ti.App.removeEventListener('showFooter',showFooter);
});
/**button effect for complete and cancel**/

$.btncancel.addEventListener("touchstart", function(e){
	this.setBackgroundColor("#fff");
	this.setColor("#e02222");
});

$.btncancel.addEventListener("touchend", function(e){
	this.setBackgroundColor("transparent");
	this.setColor("#fff");
});

$.btnrelease.addEventListener("touchstart", function(e){
	this.setBackgroundColor("#fff");
	this.setColor("#e02222");
});

$.btnrelease.addEventListener("touchend", function(e){
	this.setBackgroundColor("transparent");
	this.setColor("#fff");
});

$.btncomplete.addEventListener("touchstart", function(e){
	this.setBackgroundColor("#fff");
	this.setColor("#e02222");
});

$.btncomplete.addEventListener("touchend", function(e){
	this.setBackgroundColor("transparent");
	this.setColor("#fff");
});