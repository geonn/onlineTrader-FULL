var args = arguments[0] || {};

setTimeout(function(){
	getSummary(); 
	getProfitSummary();
}, 1000);

$.activityIndicator.show();
$.loadingBar.opacity = "1";
$.loadingBar.height = "100";
$.loadingBar.top = ((PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2)-($.loadingBar.getHeight()/2));
getAnnouncement();

//Active icon displayed
var summary = $.footer.getView('summary'); 
summary.image = "/images/icons/icon-summary-active.png";
Ti.App.Properties.setString('module', 'dealer_summary');

var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
$.webview.height = pHeight - 200 -105;
$.webview.top = 200;

var currentTime = new Date();
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
 
function getProfitSummary(e){
	var url = Ti.API.GETDEALERDAILYPROFIT + Ti.App.Properties.getString('session');
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	        
	         if(res.status == "success"){
	         	var dailyProfit = 0;
	         	
				for (var key in res.data){
					var obj = res.data[key];
		       		dailyProfit += (parseFloat(obj.courier) + parseFloat(obj.cod) -parseFloat(obj.ads_cost) -parseFloat(obj.other_cost) )  ;
				}
				$.dailyProfit.text = dailyProfit.toFixed(2);
				
	         }else{
	         	getProfitSummary(e);
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         getProfitSummary(e);
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
	var url = Ti.API.GETDAILYSUMMARYBYMONTH + Ti.App.Properties.getString('session')+ "&date=" + year+'-'+month;
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
		    
				}
				//
				$.monthCommission.text = res.total;
				$.activityIndicator.hide();
				$.loadingBar.opacity = "0";
				$.loadingBar.height = "0";
	         }else{
	         	getSummary(e);
	         }
	         
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         getSummary(e);
	     },
	     timeout : 10000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
  
}

function getAnnouncement(e) {
	var url = Ti.API.GETANNOUNCEMENT + Ti.App.Properties.getString('session'); 
	var totalWidth = 0;
	var text = "";
	var screenWidth = PixelsToDPUnits(Ti.Platform.displayCaps.platformWidth);

	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         if(res.status == "success"){
	         	
	         	var count =1;
				for (var key in res.data){
					var obj = res.data[key];
					var totalAnnouncement = res.data.length;
					var seperator = "";
					if(totalAnnouncement > count){
						seperator = " | ";
					}
					text = text + obj.message +seperator;
					count++;
				}
				
				var label = Titanium.UI.createLabel({
					    height: 25,
					    left: 50,
					    top:3,
					    font: {
					        fontSize: '16'
					    },
					    color:'black',
					    width: Ti.UI.FIT,
					    wordWrap : false, 
                		horizontalWrap: false,
					    text: text
					});
					
				label.addEventListener('postlayout', function(e) { // not called ...
				  totalWidth = e.source.rect.width;
				  var screenWidthDP = Ti.Platform.displayCaps.platformWidth / (Titanium.Platform.displayCaps.dpi / 160);

				  var animation = Titanium.UI.createAnimation({
					    right:screenWidthDP,
					    duration:8000,
        				curve: Titanium.UI.ANIMATION_CURVE_LINEAR
					});
					animation.addEventListener('complete',function() {
					    e.source.right = 0;
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
	var monthCommissions = Alloy.createController(roles + "_monthly_commission_detail").getView();

    setWindowRelationship(monthCommissions);
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

