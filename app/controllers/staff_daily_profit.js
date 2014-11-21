var args = arguments[0] || {};

var stat = $.footer.getView('summary'); 
stat.image = "/images/icons/icon-summary-active.png";

Ti.App.Properties.setString('module', 'dealer_summary');

	        
$.daily_profit.addEventListener('load', function(data) { 
   Ti.App.fireEvent('app:getDailyProfit', { 
		session: Ti.App.Properties.getString('session'), 
		url: Ti.API.GETDEALERDAILYPROFIT + Ti.App.Properties.getString('session')
	});
});
	
$.dealer_daily_profit.addEventListener('close', function(e){				// when this window close, trigger this event to remove the event.
});
