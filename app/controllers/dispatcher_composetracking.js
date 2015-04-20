var args = arguments[0] || {};
o_id = Ti.App.Properties.getString('current_oid');


function sendTracking(){
	var dialog = Ti.UI.createAlertDialog({
	    cancel: 1,
	    buttonNames: ['Cancel','Confirm'],
	    message: 'Are you sure want to submit tracking message?',
	    title: 'Send tracking message'
	  });
	  dialog.addEventListener('click', function(e){
	  
	    if (e.index === e.source.cancel){
	      //Do nothing
	    }
	    if (e.index === 1){
	    	
	    	var message = $.trackingMessage.getValue();
	    	if(message == ""){
	    		createAlert("Submit Error","Please enter tracking message");
	    		return;
	    	}
	    	$.activityIndicator.show(); 
			$.loadingBar.opacity = "1";
			$.loadingBar.height = "100";
	    	var strForm = "&o_id="+o_id+"&msg="+encodeURIComponent(message); 
			var url = Ti.API.ADDTRACKING + Ti.App.Properties.getString('session')+strForm;
			console.log(url);
	    	var client = Ti.Network.createHTTPClient({
			     // function called when the response data is available
			     onload : function(e) {
			     	 
			         alert("Tracking message submitted!");
			         $.activityIndicator.hide(); 
					 $.loadingBar.opacity = "0";
					 $.loadingBar.height = "0";
			         Ti.App.fireEvent('app:loadTrackingTable');
	    			 goBack();
			     },
			     // function called when an error occurs, including a timeout
			     onerror : function(e) {
			     	$.activityIndicator.hide(); 
					$.loadingBar.opacity = "0";
					$.loadingBar.height = "0";
			        Ti.App.fireEvent('app:loadTrackingTable');
	    			 goBack();
			     },
			     timeout : 6000  // in milliseconds
			 });
			 // Prepare the connection.
			 client.open("GET", url);
			 // Send the request.
			 client.send(); 
			 
	    }
	 });
	dialog.show();
}
