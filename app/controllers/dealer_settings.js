var args = arguments[0] || {};

//Active icon displayed
var more = $.footer.getView('more'); 
more.image = "/images/icons/icon-more-active.png";
var settings = $.footer.getView('settings'); 
settings.image = "/images/icons/icon-setting-active.png";

Ti.App.Properties.setString('module', 'dealer_settings');
var url = Ti.API.GETUSER +Ti.App.Properties.getString("session");
stateArr = [];

var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         var res = JSON.parse(this.responseText);
         $.dealer_id.text = res.data.dealer_id;
         $.fullname.value  = res.data.fullname;
         $.mobile.value    = res.data.mobile;
         $.address.value   = res.data.address;
         $.city.value      = res.data.city;
         $.postcode.value  = res.data.postcode;
         $.state.value     = res.data.states;
         $.prefer_state.value   = res.data.userState;
         stateArr          = res.data.stateList;
         mstateArr		   = res.data.mstateList;
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

function chooseMState(){
	dialog = Titanium.UI.createOptionDialog({
  		destructive: 0,
	    options:mstateArr,
	    title:'Please choose your state'
	});
	dialog.addEventListener('click', function(e){
	   $.state.value = mstateArr[e.index]; 
	   
	});
	  
	dialog.show();
}

function doUpdates(e){
	var dealer_id 		 = $.dealer_id.value;
	var fullname 		 = $.fullname.value;
	var mobile   		 = $.mobile.value;
	var prefer_state     = $.prefer_state.value;
	var new_password     = $.new_password.value;
	var confirm_password = $.confirm_password.value;
	var state            = $.state.value;
	var address     	 = $.address.value;
	var city     		 = $.city.value;
	var postcode  	     = $.postcode.value;
	 
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
	
	var url = Ti.API.UPDATEUSER + Ti.App.Properties.getString('session')+"&dealer_id="+dealer_id+"&fullname="+fullname+"&mobile="+mobile+"&prefer_state="+prefer_state+"&password="+new_password+"&address="+address+"&city="+city+"&postcode="+postcode+"&state="+state;
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
	         createAlert('Network declined','Failed to contact with server. Please make sure your device are connected to internet.');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
	//alert(fullname + "=" + new_password +"=" +confirm_password);
}
function goMore(e) {
	$.r_sub_footer.getView().animate({bottom:70,duration:500});
}
