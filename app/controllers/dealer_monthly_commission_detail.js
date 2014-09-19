var args = arguments[0] || {};
var date = args.date || '';
getSummary();

//Active icon displayed
/**var summary = $.footer.getView('summary'); 
summary.image = "/images/icons/icon-summary-active.png";
Ti.App.Properties.setString('module', 'dealer_monthly_commission');
**/
function loadTableRow(data){
	var tableData = [];
	for (var i = 0; i<data.length; i++){
        var row = Ti.UI.createTableViewRow({
            className:'forumEvent', // used to improve table performance
            rowIndex:i, // custom property, useful for determining the row during events
            selectionStyle:0,
            separatorColor:'#ccc',
            width: '100%',
            day: data[i]['date'],
        });

        var lblField = Ti.UI.createLabel({
                text: data[i]['date'],
                color:'#222',
                top:'10dp',
                left:'10dp'
            });
            
       var lblField2 = Ti.UI.createLabel({
                realValue: 'Value',
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
				top :"10dp",
				width: "20%",
				left :"80%",
                text: data[i]['value'],
                color:'#222'
            });
	  var separator = Ti.UI.createView({top:49, backgroundColor:'#9d0404', height:1});

      row.add(lblField);
      row.add(lblField2);
      row.add(separator);
      tableData.push(row);     
    }
	
	$.tableView.setData(tableData);
}

function getSummary(e) {

	var url = Ti.API.GETDAILYSUMMARYBYMONTH + Ti.App.Properties.getString('session') + "&date=" + date;
	var data = [];

	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         console.log(this.responseText);
	         if(res.status == "Success"){
	         	
				
			for (var key in res.data){
				var obj = res.data[key];
				data.push({date: obj.date, value: obj.commission });
			}
				
				loadTableRow(data);
	         }else{
	         	alert(res.status);
	         	createAlert('Error',res.status);
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         createAlert('Network declined','Failed to contact with server. Please make sure your device are connected to internet.');
	     },
	     timeout : 10000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send();
}

$.tableView.addEventListener("touchend", function(e){
    var prop = e.rowData.day;
   
    var param = {
        date: prop,
        from: "monthlyCommission"
    };
	var dailyCommission = Alloy.createController("dealer_daily_commission",param).getView();
    
    setWindowRelationship(dailyCommission);
});
