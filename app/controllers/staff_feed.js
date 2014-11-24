var args = arguments[0] || {};

var feed = $.footer.getView('feed'); 
feed.image = "/images/icons/icon-feed-active.png";
Ti.App.Properties.setString('module', 'staff_feed');

$.activityIndicator.show();
$.loadingBar.opacity = "1";
$.loadingBar.height = "100";
$.loadingBar.top = ((PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2)-($.loadingBar.getHeight()/2));
var pHeight = Ti.Platform.displayCaps.platformHeight; 
$.tableView.height = pHeight - 145; 
setTimeout(function(){
	getFeed();
}, 300);


function getFeed(){
	var url = Ti.API.GETFEED + Ti.App.Properties.getString('session');
	 
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	        
	         if(res.status == "success"){
	         	generateFeed(res);
	         	$.activityIndicator.hide();
				$.loadingBar.opacity = "0";
				$.loadingBar.height = "0";
	         } 
	         
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	     	 
	     },
	     timeout : 100000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
}

var generateFeed = function(res){
	
	var arr = res.data;
	var counter = 0;
   	var data=[];	
    
	if(arr.length > 0){
	 
		arr.forEach(function(entry) {
	   		var row = Titanium.UI.createTableViewRow({
			    touchEnabled: true,
			    height: 90,
			    source: entry.o_id,
			    selectedBackgroundColor: "#FFE1E1",
			    backgroundColor: '#FEFEFB',
				backgroundGradient: {
			      type: 'linear',
			      colors: ['#FEFEFB','#F7F7F6'],
			      startPoint: {x:0,y:0},
			      endPoint:{x:0,y:90},
			      backFillStart:false},
			});
			 
			var Title = Titanium.UI.createLabel({
					text:entry.o_id +" : "+ entry.name,
					font:{fontSize:16,fontWeight:'bold'},
					source: entry.o_id,
					color: "#848484",
					width:'85%',
					textAlign:'left',
					top:8,
					left:10,
					height:25
			});
			
			var Location =  Titanium.UI.createLabel({
					text: entry.location,
					source: entry.o_id,
					font:{fontSize:12},
					width:'auto',
					color: "#848484",
					textAlign:'left',
					width:'85%',
					top:32,
					left:10,
					height:15
			});
				
			var Contact =  Titanium.UI.createLabel({
					text:entry.mobile,
					source: entry.o_id,
					font:{fontSize:12},
					width:'auto',
					color: "#848484",
					textAlign:'left',
					top:50,
					left:10,
					height:15
			});
			
			
			var Tracking =  Titanium.UI.createLabel({
					text:entry.tracking,
					source: entry.o_id,
					font:{fontSize:12,fontWeight:'bold'},
					width:'auto',
					color: "#298A08",
					textAlign:'left', 
					top:70,
					left:10 ,
					height:15
			});
			
			var rightForwardBtn =  Titanium.UI.createImageView({
					image:"/images/btn-forward.png",
					source: entry.o_id,
					width:15,
					right:20 
			});		
				
			var Seperator =  Titanium.UI.createView({ 
					source: entry.o_id, 
					width:'100%',
					backgroundColor: "#A4A4A4",
					textAlign:'left',  
					height:1,
					bottom:0
			});
				
			row.add(Title);	
			row.add(Location);	
			row.add(Contact);	
			row.add(Tracking);	
			row.add(rightForwardBtn);
			row.add(Seperator);
			data.push(row);
		});			
		
   		$.tableView.setData(data);	
   		addClickEvent($.tableView);
	   			
	}
};



function refreshPage(){
	$.activityIndicator.show();
	$.loadingBar.opacity = "1";
	$.loadingBar.height = "100";
	$.loadingBar.top = ((PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2)-($.loadingBar.getHeight()/2));
	$.tableView.removeEventListener('click',  goToTracking);
	getFeed();
}

var goToTracking = function(e){
	var roles = Ti.App.Properties.getString('roles');
	page = roles + "_ordertracking";
	Ti.App.Properties.setString('current_oid', e.rowData.source);
	var navigate = Alloy.createController(page).getView(); 
	setWindowRelationship(navigate);   	
	
};
function addClickEvent(table){
	$.tableView.addEventListener('click',  goToTracking);
}
 