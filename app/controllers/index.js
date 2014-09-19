var args = arguments[0] || {};

var ses = Ti.App.Properties.getString('session');
var target = Ti.App.Properties.getString('target');
var extra = Ti.App.Properties.getString('extra');
var payload = Ti.App.Payload;

if(ses == null){
	//console.log('ses null');
	$.index.open();
}else{
	//console.log("other");
	var url = Ti.API.CHECKSESSION +ses;
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	        
	         if(res.status == "success"){
	         	var rl = Ti.App.Properties.getString('roles');
	
				if(rl == 'dealer'){
					$.index.close();
					var summary = Alloy.createController(rl + '_summary').getView();
				   	
					setWindowRelationship(summary);
				}else{
					$.index.close();
					var home = Alloy.createController(rl + '_home').getView();
				   	
				   	setWindowRelationship(home);
				}	
				
				if(payload != ''){
					//alert('work'+JSON.stringify(payload));
					//getNotificationNumber(payload);	
					
					//Ti.App.Payload = '';
				}else{
					
				}
	         }else{
	         	$.index.open();
	         }
	         
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         $.index.open();
	     },
	     timeout : 10000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
	
}

//Ti.App.Properties.removeProperty('session');
Ti.App.Properties.setString('module', 'index');
function doLogin(e) {
	$.activityIndicator.show();
	var username = $.username.value;
	var password = $.password.value;
	
	if(username == "" || password == ""){
		createAlert('Authentication warning','Please fill in username and password');
		return;
	}
	var dt = Ti.App.Properties.getString('deviceToken');
	var url = Ti.API.LOGIN +"&username="+username+"&password="+password+"&deviceToken="+dt;
	
	var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         var res = JSON.parse(this.responseText);
         if(res.status == "success"){
         	 if(res.data.roles == "admin"){
         	 	createAlert('Roles declined','Your roles(admin) is not authorize for this app');         	 	
         	 }else{
         	 	 Ti.App.Properties.setString('roles',res.data.roles);
         	 	 Ti.App.Properties.setString('session',res.data.session);
         	 	 
         	 	 if(Alloy.Globals.osname == "android"){
         	 	 	subscribeDeviceToken(dt,res.data.roles);
         	 	 }
         	 	 
         	 	 if(res.data.roles == 'dealer'){
         	 	 	$.index.close();
         	 	 	var summary = Alloy.createController(res.data.roles + '_summary').getView();
         	 	 	
	    	     	setWindowRelationship(summary);
         	 	 }else{
	    	     	$.index.close();
         	 	 	var home = Alloy.createController(res.data.roles + '_home').getView();

			        setWindowRelationship(home);
         	 	 }
	       		 if(payload != null){
					getNotificationNumber(payload);	
					//Ti.App.Payload = '';
				}
         	 }
         	 
         }else{
         	createAlert('Authentication warning',res.data);
         }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         createAlert('Network declined','Failed to contact with server. Please make sure your device are connected to internet.');
     },
     timeout : 10000  // in milliseconds
 });
 // Prepare the connection.
 client.open("GET", url);
 // Send the request.
 client.send(); 
   
}


$.passwordhint.addEventListener('click', function (e) {
    $.passwordhint.visible = false;
    $.password.focus();
});
        
$.password.addEventListener('blur', function (e){
	if($.password.value <= 0){
		$.passwordhint.visible = true;
	}
});

$.password.addEventListener('focus', function (e){
	$.passwordhint.visible = false;
    $.password.focus();
});

$.usernamehint.addEventListener('click', function (e) {
    $.usernamehint.visible = false;
    $.username.focus();
});
        
$.username.addEventListener('blur', function (e){
	if($.username.value <= 0){
		$.usernamehint.visible = true;
	}
});

$.username.addEventListener('focus', function (e){
	$.usernamehint.visible = false;
    $.username.focus();
});

