var args = arguments[0] || {};

if(args.from == "monthlyCommission"){
 	var today = args.date;
}else{
	var currentTime = new Date();
	var monthCommission = 0;
	
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();
	
	if (month < 10) month = '0' + month;
	if (day < 10) day = '0' + day;
	var today = day+'/'+month+'/'+year;
}



//Active icon displayed
/**var summary = $.footer.getView('summary'); 
summary.image = "/images/icons/icon-summary-active.png";
Ti.App.Properties.setString('module', 'dealer_daily_commission');
**/


$.orderlistview.addEventListener('load', function(data) { 
	console.log(Ti.API.GETCOMMISSION + Ti.App.Properties.getString('session')+"&date="+today);
  	Ti.App.fireEvent('app:orderListParam', { 
		session: Ti.App.Properties.getString('session'), 
		url: Ti.API.GETCOMMISSION + Ti.App.Properties.getString('session')+"&date="+today,
	});

});

function refreshPage(e) {
   Ti.App.fireEvent('app:refreshPage');
  
}