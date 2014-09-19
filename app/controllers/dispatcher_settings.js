var args = arguments[0] || {};

//Active icon displayed
var settings = $.footer.getView('settings'); 
settings.image = "/images/icons/icon-setting-active.png";
Ti.App.Properties.setString('module', 'dispatcher_settings');
var url = Ti.API.GETUSER +Ti.App.Properties.getString("session");

var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         var res = JSON.parse(this.responseText);
         $.fullname.value = res.data.fullname;
         $.mobile.value   = res.data.mobile;
         $.prefer_state.value   = res.data.userState;
         stateArr         = res.data.stateList;
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         alert(e);
     },
     timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 client.open("GET", url);
 // Send the request.
 client.send(); 


function chooseState(){
	dialog = Titanium.UI.createOptionDialog({
  		destructive: 0,
	    options:stateArr,
	    title:'Please choose your preferred state'
	});
	dialog.addEventListener('click', function(e){
	   $.prefer_state.value = stateArr[e.index]; 
	   
	});
	  
	dialog.show();
}

function doUpdates(e){
	var fullname = $.fullname.value;
	var mobile = $.mobile.value;
	var prefer_state     = $.prefer_state.value;
	var new_password = $.new_password.value;
	var confirm_password = $.confirm_password.value;
	
	if(fullname == ''){
		createAlert('Request Rejected','Full name cannot be empty.');
		return;
	}
	if(mobile == ''){
		createAlert('Request Rejected','Mobile number cannot be empty.');
		return;
	}
	if((new_password != '') ){
		if(new_password != confirm_password ){
			createAlert('Request Rejected','Both password must be match.');
			return;
		}
	}
	
	var url = Ti.API.UPDATEUSER + Ti.App.Properties.getString('session')+"&fullname="+fullname+"&mobile="+mobile+"&prefer_state="+prefer_state+"&password="+new_password;
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         if(res.status == "success"){
	         	createAlert('Profile Updates','Your changes successfully saved.');
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         alert(JSON.stringify(e));
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
	//alert(fullname + "=" + new_password +"=" +confirm_password);
}
