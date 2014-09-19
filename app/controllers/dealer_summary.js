var args = arguments[0] || {};
getSummary();
getDailySummary();

//Active icon displayed
var summary = $.footer.getView('summary'); 
summary.image = "/images/icons/icon-summary-active.png";
Ti.App.Properties.setString('module', 'dealer_summary');

var currentTime = new Date();
var monthCommission = 0;

var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();

if (month < 10) month = '0' + month;
if (day < 10) day = '0' + day;

var today = year+'-'+month+'-'+day;

function getDailySummary(e) {
	var url = Ti.API.GETDAILYSUMMARY + Ti.App.Properties.getString('session');
	console.log(url);
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         
	         if(res.status == "Success"){
	         	
				for (var key in res.data){
					var obj = res.data[key];

					if(obj.created == today){
		       			var todaycomm = parseFloat(obj.commission);
		       			$.todayCommission.text = todaycomm.toFixed(2);
		       		}
		       		monthCommission += parseFloat(obj.commission);
				}
				$.monthCommission.text = monthCommission.toFixed(2);
	         }else{
	         	getSummary(e);
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         getSummary(e);
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
  
}
				
//$.mySession.text = model;
function getSummary(e) {
	var url = Ti.API.GETSUMMARY + Ti.App.Properties.getString('session');
	console.log("getsummary "+url);
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         
	         if(res.status == "Success"){
	         	var monthCommission = 0;
				for (var key in res.data){
					var obj = res.data[key];

					if(obj.created == today){
		       			var todaycomm = parseFloat(obj.commission);
		       			$.todayCommission.text = todaycomm.toFixed(2);
		       		}
		   
		       		monthCommission += parseFloat(obj.commission);
				}
				
				$.monthCommission.text = monthCommission.toFixed(2);
	         }else{
	         	getSummary(e);
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         getSummary(e);
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
  
}

function goDailyReport(){
	var roles = Ti.App.Properties.getString('roles');
	
	var monthCommission = Alloy.createController(roles + "_monthly_commission").getView();

    setWindowRelationship(monthCommission);
}

$.webview.addEventListener('load', function() {
	$.activityIndicator.show();
	var url = Ti.API.GETINVENTORY + Ti.App.Properties.getString('session');
	Ti.App.fireEvent("app:urlFromApp", {url: url});
    //$.webview.evalJS("document.getElementById('body').style.width = '" + Titanium.Platform.displayCaps.platformWidth + "pt'");
});

var removeLoading = function() { 
	$.activityIndicator.hide();
	Ti.App.removeEventListener('app:removeLoading', removeLoading);
};

Ti.App.addEventListener('app:removeLoading', removeLoading);

