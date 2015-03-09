/**************************
 * 
 * APP Settings and Configuration
 **************************/
// APP api domain 
Ti.API.API_DOMAIN  = 'www.onlinetrader.com.my';

// APP authenticate user and key
Ti.API.USER  = 'biomas';
Ti.API.KEY   = '06b53047cf294f7207789ff5293ad2dc';

// APP URL called
Ti.API.CHECKSESSION = "http://"+Ti.API.API_DOMAIN+"/api/checkSession?version=1.1.1&user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.LOGIN        = "http://"+Ti.API.API_DOMAIN+"/api/loginUser?version=1.1&user="+Ti.API.USER+"&key="+Ti.API.KEY;
Ti.API.LOGOUT	    = "http://"+Ti.API.API_DOMAIN+"/api/logoutUser?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETDAILYSUMMARY   = "http://"+Ti.API.API_DOMAIN+"/api/getDailySummaryByDealer?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETSUMMARY   = "http://"+Ti.API.API_DOMAIN+"/api/getSummaryByDealer?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETCOMMISSION   = "http://"+Ti.API.API_DOMAIN+"/api/getCommissionByDate?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETINVENTORY = "http://"+Ti.API.API_DOMAIN+"/webview/summaryInventory?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETUSER      = "http://"+Ti.API.API_DOMAIN+"/api/getUser?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETORDDETAILS= "http://"+Ti.API.API_DOMAIN+"/api/getOrderDetails?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.UPDATEUSER   = "http://"+Ti.API.API_DOMAIN+"/api/updateUser?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.UPDATEORDER  = "http://"+Ti.API.API_DOMAIN+"/api/updateOrder?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.ADDORDER     = "http://"+Ti.API.API_DOMAIN+"/api/addOrder?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.RELEASEORDER = "http://"+Ti.API.API_DOMAIN+"/api/releaseOrder?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.ADDPOS       = "http://"+Ti.API.API_DOMAIN+"/api/addPos?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.UPDATEPOS    = "http://"+Ti.API.API_DOMAIN+"/api/updatePos?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETPOS       = "http://"+Ti.API.API_DOMAIN+"/api/getPos?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETPOSDETAIL = "http://"+Ti.API.API_DOMAIN+"/api/getPosDetails?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.PICKORDER    = "http://"+Ti.API.API_DOMAIN+"/api/pickOrder?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.CANCELORDER  = "http://"+Ti.API.API_DOMAIN+"/api/cancelOrder?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.REQUESTCANCEL= "http://"+Ti.API.API_DOMAIN+"/api/requestCancel?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.COMPLETEORDER= "http://"+Ti.API.API_DOMAIN+"/api/completeOrder?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETDEALERORD = "http://"+Ti.API.API_DOMAIN+"/api/getOrder?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&type=dealer_id&session=";
Ti.API.GETDISPATCHORD= "http://"+Ti.API.API_DOMAIN+"/api/getOrder?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&type=dispatch_id&session=";
Ti.API.GETPNDORDER   = "http://"+Ti.API.API_DOMAIN+"/api/getOrder?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&type=status&value=1&session=";
Ti.API.GETSTATISTIC  = "http://"+Ti.API.API_DOMAIN+"/api/getStatisticByDate?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETUSERSTAT   = "http://"+Ti.API.API_DOMAIN+"/api/getStatisticByUser?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETSTATE      = "http://"+Ti.API.API_DOMAIN+"/api/getState?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETPRODUCT    = "http://"+Ti.API.API_DOMAIN+"/api/getProduct?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.ADDTRACKING   = "http://"+Ti.API.API_DOMAIN+"/api/addTrackingLog?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETTRACKING   = "http://"+Ti.API.API_DOMAIN+"/api/getOrderTracking?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETDATELIST   = "http://"+Ti.API.API_DOMAIN+"/api/getMonthYear?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETDONELIST   = "http://"+Ti.API.API_DOMAIN+"/api/getDoneList?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.SETUNREAD      = "http://"+Ti.API.API_DOMAIN+"/api/unsetUserNotification?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETFEED        = "http://"+Ti.API.API_DOMAIN+"/api/getNotificationByUser?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETNOTISCOUNT  = "http://"+Ti.API.API_DOMAIN+"/api/totalUserNotificationByUser?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETDAILYSUMMARYBYMONTH = "http://"+Ti.API.API_DOMAIN+"/api/getDailySummaryByMonth?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETDEALERRANKINGBYMONTH = "http://"+Ti.API.API_DOMAIN+"/api/getMonthlyRankingByDealer?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETLOCATIONRANKINGBYMONTH = "http://"+Ti.API.API_DOMAIN+"/api/getMonthlyRankingByLocation?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETDEALERDAILYPROFIT = "http://"+Ti.API.API_DOMAIN+"/api/getDailyProfitList?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";
Ti.API.GETANNOUNCEMENT = "http://"+Ti.API.API_DOMAIN+"/api/getAnnoucement?user="+Ti.API.USER+"&key="+Ti.API.KEY+"&session=";

Ti.CURRENTWINDOW = '';
//Global Variable
Ti.App.CURRENTWINDOW = '';
Ti.App.WindowCabinet = [];
Ti.App.Payload  = '';

Alloy.Globals.deviceHeight = Ti.Platform.displayCaps.platformHeight;
Alloy.Globals.osname       = Ti.Platform.osname;

///////////XHR cache 

var XHR = require("lib/xhr");
var xhr = new XHR();
var redirect = false;
var notificationNumber = 0;
var app_status = '';
// Delete all expired documents (this method should be called at least once in your app)
xhr.clean();
var clickTime = null;
// Delete all cached documents (expired or not, be very careful using this method)
//xhr.purge();

/**************************
 * 
 * GLOBAL FUNCTIONS
 **************************/
function goNav(event){
	
	checkSession();

	if(goNav.__isExecuting) {
        return;
    }
    
    goNav.__isExecuting = true;
	var page  = event.source.mod;
	var module = Ti.App.Properties.getString('module');
	var roles = Ti.App.Properties.getString('roles');
	page = roles + "_" + page;
 
	if(module != page){
		var navigate = Alloy.createController(page).getView();
        
        /** close current window and after launch new page **/
		if(Ti.App.CURRENTWINDOW != ''){
	    	removeWindowRelationship();
	   	}
	   	setWindowRelationship(navigate);
	}
	 
	
	setTimeout(function(){
	    goNav.__isExecuting = false;
	}, 200);
	
}

function goBack(){
	var windowtree = Ti.App.WindowCabinet;
	
	if((windowtree.length-1) >= 0){	
		removeWindowRelationship();
   	}
   	
}

function popup(event){
	var currentTime = new Date();
	if (currentTime - clickTime < 1000) {
	    return;
	};
	clickTime = currentTime;
	var page  = event.source.mod;
	var module = Ti.App.Properties.getString('module');
	var roles = Ti.App.Properties.getString('roles');
	page = roles + "_" + page;
	if(module != page){ 
		var navigate = Alloy.createController(page).getView();
	   // navigate.open();
	   setWindowRelationship(navigate);
	}
}

function removeWindowRelationship(){
 
    var tempArr = Ti.App.WindowCabinet;
     if(tempArr.length > 1){
	 	Ti.App.CURRENTWINDOW.close();
	 }
	 tempArr.splice((tempArr.length-1), 1);
	 Ti.App.WindowCabinet = tempArr;
	 Ti.App.CURRENTWINDOW = tempArr[(tempArr.length-1)];
}

function removeAllWindow(){
	 var tempArr = Ti.App.WindowCabinet;
	 if(tempArr.length > 0){
	 	for(var a=0; a < tempArr.length; a++){
	 		tempArr[a].close();
	 	}
	 }
}


function setWindowRelationship(current){
 	var tempArr = Ti.App.WindowCabinet;
 	 current.open(); 

	 Ti.App.CURRENTWINDOW = current;
	 var tempArr = Ti.App.WindowCabinet;
	 tempArr.push(current);
	 
	 Ti.App.WindowCabinet = tempArr;
}

function slideEffect(){
	var effect= Ti.UI.createAnimation({
            top : '0',
            left : '0',
            height : Titanium.Platform.displayCaps.platformHeight,
            width : Titanium.Platform.displayCaps.platformWidth,
            duration : 100,
        });	
	return effect;
}

function goHome(event){
	var roles = Ti.App.Properties.getString('roles');
	var module = Ti.App.Properties.getString('module');
	
	var home = "dispatcher_home";
	if(roles == "dealer"){
		var home = "dealer_summary";
	}
	if(module != home){
		var naviHome = Alloy.createController(home).getView();
		naviHome.open();
	}
}

function createAlert(tt,msg){
	var box = Titanium.UI.createAlertDialog({
		title: tt,
		message: msg
	});
	box.show();
}

function isiOS7Plus(){
    // iOS-specific test
    if (Titanium.Platform.name == 'iPhone OS')
    {
        var version = Titanium.Platform.version.split(".");
        var major = parseInt(version[0],10);
 
        // Can only test this support on a 3.2+ device
        if (major >= 7)
        {
            return true;
        }else{
        	return false;
        }
    }
    return true;
}
 

function doLogout(e) {
//	$.spinner.show(); 

	var dialog = Ti.UI.createAlertDialog({
	    cancel: 1,
	    buttonNames: ['Cancel','Confirm'],
	    message: 'Would you like to logout?',
	    title: 'Logout Online Trader'
	  });
	  dialog.addEventListener('click', function(e){
	  
	    if (e.index === e.source.cancel){
	      //Do nothing
	    }
	    if (e.index === 1){
	    	
			var url = Ti.API.LOGOUT + Ti.App.Properties.getString('session');
			var client = Ti.Network.createHTTPClient({
			     // function called when the response data is available
			     onload : function(e) { 
			         var res = JSON.parse(this.responseText);
			         removeAllWindow();
			         Ti.App.Properties.removeProperty('session');
			       	 var login = Alloy.createController('index').getView();
			         login.open();
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
	    }
	 });
 
	dialog.show();
}

function checkSession(){
	var ses = Ti.App.Properties.getString('session');
	if(ses == null){
		var login = Alloy.createController('index').getView();
		login.open();
	}else{
		var url = Ti.API.CHECKSESSION +ses;
		
		var client = Ti.Network.createHTTPClient({
		     // function called when the response data is available
		     onload : function(e) {
		     	
		         var res = JSON.parse(this.responseText);
		         if(res.status == "success"){
		         	
		         }else{
		         	createAlert("Session End","Your account are login at another device. Please login again.");
		         	var login = Alloy.createController('index').getView();
					login.open();
		         }
		         
		     },
		     // function called when an error occurs, including a timeout
		     onerror : function(e) {
		     	createAlert("Network declined","Failed to contact with server. Please make sure your device are connected to internet.");
		        
		     },
		     timeout : 10000  // in milliseconds
		 });
		 // Prepare the connection.
		 client.open("GET", url);
		 // Send the request.
		 client.send(); 
		
	}
}
/**********************************************
 * ****PUSH NOTIFICATION RELATED***************
 * *******************************************/


if(Alloy.Globals.osname == "android"){
	var CloudPush = require('ti.cloudpush');
	var Cloud = require('ti.cloud');
	
	// notification callback function (important)
	CloudPush.addEventListener('callback', function (evt) {
 
		var payload = JSON.parse(evt.payload);

		Ti.App.Payload = payload;
		// if trayClickLaunchedApp or trayClickFocusedApp set redirect as true
		if(redirect){
			if(app_status == "not_running"){
				
			}else{
				redirect = false;
				getNotificationNumber(payload);
			}
		}else{
			var current_controller = Ti.App.Properties.getString('controller');
			
			if(current_controller == payload.target){
				Ti.App.fireEvent("app:refresh");
			}
		}
	});
	
	CloudPush.addEventListener('trayClickLaunchedApp', function (evt) {
		redirect = true;
		app_status = "not_running"; 
	    getNotificationNumber(Ti.App.Payload);
	});
	CloudPush.addEventListener('trayClickFocusedApp', function (evt) {
		redirect = true;
		app_status = "running"; 
	});
	
	function getNotificationNumber(payload){

		var ses = Ti.App.Properties.getString('session');
		var url = Ti.API.GETNOTISCOUNT+ses;
		var extra = "";
		var target = "";
		var client = Ti.Network.createHTTPClient({
		     // function called when the response data is available
		     onload : function(e) {
		         var res = JSON.parse(this.responseText);
		      //   alert("get notification: "+JSON.stringify(res));
		         if(res.status == "success"){
		         	notificationNumber = res.data.total;
		         } 
		         

					if(notificationNumber > 1){
						target = "group";
					}else{
						target = payload.target;
						extra = payload.extra;
					}
					//alert("getnotification target: "+target);
					if(app_status == "running"){
						notificationNav(target, extra);
					}else{
						notificationNav(target, extra);
					}
					
		     },
		     // function called when an error occurs, including a timeout
		     onerror : function(e) {
		     	createAlert("Network declined","Failed to contact with server. Please make sure your device are connected to internet.");
		        
		     },
		     timeout : 10000  // in milliseconds
		 });
		 // Prepare the connection.
		 client.open("GET", url);
		 // Send the request.
		 client.send(); 
	}
	
	function notificationNav(target, extra){
		var param = {
	        o_id: extra,
	    }; 
	   	
	    if(target == "dealer_ordertracking"){
		    removeAllWindow();
		    Ti.App.Properties.setString('module', target);
		    
		    var orderlisting = Alloy.createController('dealer_orderlist').getView();
		    setWindowRelationship(orderlisting);
		    
		    var orderdetail = Alloy.createController('dealer_orderdetail', param).getView();
		    setWindowRelationship(orderdetail);
		      
			var targetWindow = Alloy.createController(target, param).getView();
		    setWindowRelationship(targetWindow);
	    }else if(target == "dealer_orderdetail"){
	    	removeAllWindow();
		    Ti.App.Properties.setString('module', target);
		    
		    var orderlisting = Alloy.createController('dealer_orderlist').getView();
		    setWindowRelationship(orderlisting);
		    
		    var targetWindow = Alloy.createController(target, param).getView();
		    setWindowRelationship(targetWindow);
	    }else if(target == "group"){
	    	removeAllWindow();
	    	var roles = Ti.App.Properties.getString('roles');
		    
	    	target = roles+"_feed";
	    	Ti.App.Properties.setString('module', target);
			var targetWindow = Alloy.createController(target, param).getView();
			setWindowRelationship(targetWindow);
	    	 
	    }else if(target == "dispatcher_home"){
	    	removeAllWindow();
		    Ti.App.Properties.setString('module', target);
		    
		    var targetWindow = Alloy.createController(target, param).getView();
		    setWindowRelationship(targetWindow);
	    }else if(target == "dispatcher_orderdetail"){
	    	removeAllWindow();
	    	Ti.App.Properties.setString('module', target);
	    	
	    	var orderlisting = Alloy.createController('dispatcher_orderlist').getView();
		    setWindowRelationship(orderlisting);
		    
	    	var targetWindow = Alloy.createController(target, param).getView();
		    setWindowRelationship(targetWindow);
	    }else if(target == "dispatcher_ordertracking"){
	    	removeAllWindow();
	    	Ti.App.Properties.setString('module', target);
	    	
	    	var orderlisting = Alloy.createController('dispatcher_orderlist').getView();
		    setWindowRelationship(orderlisting);
		    
		    var orderdetail = Alloy.createController('dispatcher_orderdetail').getView();
		    setWindowRelationship(orderdetail);
		    
	    	var targetWindow = Alloy.createController(target, param).getView();
		    setWindowRelationship(targetWindow);
	    }
	}
	
	CloudPush.retrieveDeviceToken({
	    success: deviceTokenSuccess,
	    error: deviceTokenError
	});
	 
	
	function deviceTokenSuccess(e) {
	    Ti.API.info('Device Token: ' + e.deviceToken);
	   
	    Ti.App.Properties.setString('deviceToken', e.deviceToken);
	    
	    //subscribeDeviceToken(e.deviceToken);
	   // enablePush.enabled = true;
	}
	
	function subscribeDeviceToken(deviceToken,channel){
		Cloud.Users.login({
		    login: 'geomilano',
		    password: '123456'
		}, function (e) {
		    if (e.success) {
		     //   alert("login success");
		        Cloud.PushNotifications.subscribe({
				    channel: channel,
				    device_token: deviceToken,
				    type: 'gcm' //here i am using gcm, it is recommended one
				}, function (e) {
				    if (e.success) {
				   //     alert('Subscribed for Push Notification!');
				    } else {
				        alert('Subscribe error:' + ((e.error +": " + e.message) || JSON.stringify(e)));
				    }
				});
		    } else {
		        alert('Error: ' + ((e.error +" : " + e.message) || JSON.stringify(e)));
		    }
		});   
		
		
	}
	 
	function deviceTokenError(e) {
	    alert('Failed to register for push! ' + e.error);
	}
	
}

function PixelsToDPUnits(ThePixels){
  return (ThePixels / (Titanium.Platform.displayCaps.dpi / 160));
}

function DPUnitsToPixels(TheDPUnits){
  return (TheDPUnits * (Titanium.Platform.displayCaps.dpi / 160));
}

function GetWidth(value) {
	var screenWidth = Ti.Platform.displayCaps.platformWidth;
    var temp = (value * 100) / 320;
    return parseInt((screenWidth * temp) / 100);
};

 
