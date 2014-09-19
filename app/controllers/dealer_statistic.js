var args = arguments[0] || {};

var stat = $.footer.getView('statistic'); 
stat.image = "/images/icons/icon-ranking-active.png";

Ti.App.Properties.setString('module', 'dealer_statistic');

/**Change Title**/
var changeTitle = function(e) {
	$.titleHeader.text = e.title;
	
};

Ti.App.addEventListener('changeTitle', changeTitle);
/**Change Title End**/

$.dealer_statistic.addEventListener('close', function(e){				// when this window close, trigger this event to remove the event.
	Ti.App.removeEventListener('changeTitle',changeTitle);
});
	        
$.salessatisticview.addEventListener('load', function(data) { 
   Ti.App.fireEvent('app:getStatistic', { 
		session: Ti.App.Properties.getString('session'), 
		url: Ti.API.GETSTATISTIC + Ti.App.Properties.getString('session'),
		userstat: Ti.API.GETUSERSTAT + Ti.App.Properties.getString('session'),
		datelist : Ti.API.GETDATELIST + Ti.App.Properties.getString('session'),
	});
});
	
$.dealer_statistic.addEventListener('close', function(e){				// when this window close, trigger this event to remove the event.
	Ti.App.removeEventListener('changeTitle',changeTitle);
});
