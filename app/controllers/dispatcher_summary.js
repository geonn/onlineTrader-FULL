var args = arguments[0] || {};
getSummary();

//Active icon displayed
var summary = $.footer.getView('summary'); 
summary.image = "/images/icons/icon-summary-active.png";
Ti.App.Properties.setString('module', 'dispatcher_summary');

//$.mySession.text = model;
function getSummary() {
	var url = Ti.API.GETSUMMARY + Ti.App.Properties.getString('session');
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         
	         if(res.status == "Success"){
	         	var currentTime = new Date();
				var monthCommission = 0;
				
				var month = currentTime.getMonth() + 1;
				var day = currentTime.getDate();
				var year = currentTime.getFullYear();
				
				if (month < 10) month = '0' + month;
				if (day < 10) day = '0' + day;
	
				var today = year+'-'+month+'-'+day;
				for (var key in res.data){
					var obj = res.data[key];

					if(obj.created == today){
						var todaycomm = parseFloat(obj.commission);
		       			$.todayCommission.text = todaycomm.toFixed(2);
		       		}
		       		
		       		monthCommission = parseFloat(obj.commission);
				}
				$.monthCommission.text = monthCommission.toFixed(2);
	         }else{
	         	getSummary();
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         getSummary();
	     },
	     timeout : 60000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
  
}

$.donelistview.addEventListener('load', function(data) { 
   Ti.App.fireEvent('app:dispatchrdoneListParam', { 
		session: Ti.App.Properties.getString('session'), 
		url: Ti.API.GETDONELIST + Ti.App.Properties.getString('session'),
	});
});

