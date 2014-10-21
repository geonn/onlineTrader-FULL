var args = arguments[0] || {};

//Active icon displayed
var poslist = $.footer.getView('poslist'); 
poslist.image = "/images/icons/icon-pos-active.png";
Ti.App.Properties.setString('module', 'dealer_poslist');

/**Experiment**/
Ti.App.fireEvent("getSession", {session:Ti.App.Properties.getString("session")});
/**End**/

Ti.App.addEventListener("app:viewPosDetail", goPosDetails);


function goPosDetails(e){
	
	var roles = Ti.App.Properties.getString('roles');
	var param = {
        p_id: e.p_id,
    };
	var posdetail = Alloy.createController(roles + "_posdetail",param).getView();
    
    setWindowRelationship(posdetail);
};

function refreshPage(e){
	Ti.App.fireEvent('app:refreshPage');
}
///////////function////////////
var getData = function (data){
	Titanium.API.info("POS: getData");
	var url = data.queryUrl;
	xhr.get(url, onSuccessCallback, onErrorCallback, { ttl: 60 });
};

var clearCache = function (data){
	Titanium.API.info("POS: clearCache");
	xhr.clear(data.queryUrl);
};


var onSuccessCallback = function(e) {
	Ti.App.fireEvent('html:realDrawTable', { 
		data: JSON.parse(e.data),
	});
};

var onErrorCallback = function(e) {
	alert('no cache or connection lost');
	// Handle your errors in here
};
 
Ti.App.addEventListener('Ti:getData', getData); 
Ti.App.addEventListener('Ti:clearCache', clearCache);
 
 	      
$.poslistview.addEventListener('load', function(data) { 
	
  	Ti.App.fireEvent('app:posListParam', { 
		session: Ti.App.Properties.getString('session'), 
		posUrl : Ti.API.GETPOS + Ti.App.Properties.getString('session'),
	});
	
});

$.dealer_poslist.addEventListener('close', function(e){				// when this window close, trigger this event to remove the event.
	Ti.App.removeEventListener('app:viewPosDetail',goPosDetails);
	Ti.App.removeEventListener('Ti:getData', getData); 
	Ti.App.removeEventListener('Ti:clearCache', clearCache);
});

$.dealer_poslist.addEventListener('androidback', function(e){				// when this window close, trigger this event to remove the event.
	Ti.App.removeEventListener('app:viewPosDetail',goPosDetails);
	Ti.App.removeEventListener('Ti:getData', getData); 
	Ti.App.removeEventListener('Ti:clearCache', clearCache);
});

$.rightNav.addEventListener("touchstart", function(e){
	this.setBackgroundColor("#fff");
	this.setColor("#e02222");
});

$.rightNav.addEventListener("touchend", function(e){
	this.setBackgroundColor("transparent");
	this.setColor("#fff");
});
