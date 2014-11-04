var args = arguments[0] || {};
getSummary();
getDailySummary();
getAnnouncement();

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

var label = Titanium.UI.createLabel({
    left: 320,
    width: 300,
    height: 20,
    color:'black',
    text:'horizontal auto scrolling text'
});
 

function PixelsToDPUnits(ThePixels)
{
  return (ThePixels / (Titanium.Platform.displayCaps.dpi / 160));
}

function GetWidth(value) {
	var screenWidth = Ti.Platform.displayCaps.platformWidth;
    var temp = (value * 100) / 320;
    return parseInt((screenWidth * temp) / 100);
};

function getDailySummary(e) {
	var url = Ti.API.GETDAILYSUMMARY + Ti.App.Properties.getString('session');
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

function getAnnouncement(e) {
	var url = Ti.API.GETANNOUNCEMENT + Ti.App.Properties.getString('session');
	console.log(url);
	var totalWidth = 0;
	var text = "";
	var screenWidth = PixelsToDPUnits(Ti.Platform.displayCaps.platformWidth);

	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         if(res.status == "success"){
	         	
				for (var key in res.data){
					var obj = res.data[key];
					console.log(obj.message+" "+text);
					text = text + obj.message+" | ";
		       		
				}
				
				var label = Titanium.UI.createLabel({
					    height: 20,
					    left: 0,
					    color:'black',
					    width: Ti.UI.FILL,
					    text: text
					});
					
				label.addEventListener('postlayout', function(e) { // not called ...
				  totalWidth = e.source.rect.width;
				  var screenWidthDP = Ti.Platform.displayCaps.platformWidth / (Titanium.Platform.displayCaps.dpi / 160);

				  var animation = Titanium.UI.createAnimation({
					    left:screenWidthDP,
					    duration:3000,
        				curve: Titanium.UI.ANIMATION_CURVE_LINEAR
					});
					animation.addEventListener('complete',function() {
					    e.source.left = 0;
					    e.source.animate(animation); 
					});
				   e.source.animate(animation);
				});
				$.noticeBoard.add(label);
	         }else{
	         	getAnnouncement(e);
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         getAnnouncement(e);
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
	var url = Ti.API.GETINVENTORY + Ti.App.Properties.getString('session');
	Ti.App.fireEvent("app:urlFromApp", {url: url});
    //$.webview.evalJS("document.getElementById('body').style.width = '" + Titanium.Platform.displayCaps.platformWidth + "pt'");
});

var removeLoading = function() { 
	Ti.App.removeEventListener('app:removeLoading', removeLoading);
};

Ti.App.addEventListener('app:removeLoading', removeLoading);

