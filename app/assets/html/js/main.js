function isNumber(n) {
	if(n > 0){
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	if(n == 0){
		return true;
	}
	
}

function findTotalQty(){
    var arr = document.getElementsByClassName('productQty');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    return tot;
}

function findTotalPrice(){
    var arr = document.getElementsByClassName('productPrice');
    //var qty = document.getElementsByClassName('productQty');
    var tot = 0;
    for(var i=0;i<arr.length;i++){
    	
        if(parseFloat(arr[i].value)){
        	grand_total = parseFloat(arr[i].value);
        	tot += parseFloat(grand_total);
        }
            
    }
    return tot;
}

function todayDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
	
	if(dd<10) {
	    dd='0'+dd;
	} 
	
	if(mm<10) {
	    mm='0'+mm;
	} 
	
	today = dd+'/'+mm+'/'+yyyy;
	return today;
}

function validateForm(){
	var name = $('input[name="name"]').val();
	var mobile = $('input[name="mobile"]').val();
	//var location = $('input[name="location"]').val();
	var area = $('#selector_area').val();
	var prod = findTotalQty();
	
	if(name == ""){
		alert("Customer name cannot be empty");
		return false;
	}
	if(mobile == ""){
		alert("Mobile number cannot be empty");
		return false;
	}
	/**if(location == ""){
		alert("Location cannot be empty");
		return false;
	}
	**/
	if(area == ""){
		alert("Area cannot be empty");
		return false;
	}
	if(prod == 0){
		alert("Product cannot be empty");
		return false;
	}
	
	return true;
}

function validatePosForm(){
	var s_name = $('input[name="sender_name"]').val();
	var s_mobile = $('input[name="sender_mobile"]').val();
	var s_address = $('textarea[name="sender_address"]').val();
	var s_city = $('input[name="sender_city"]').val();
	var s_poscode = $('input[name="sender_postcode"]').val();
	var s_state = $('select[name="sender_state"]').val();
	
	var r_name = $('input[name="receiver_name"]').val();
	var r_mobile = $('input[name="receiver_mobile"]').val();
	var r_address = $('textarea[name="receiver_address"]').val();
	var r_city = $('input[name="receiver_city"]').val();
	var r_poscode = $('input[name="receiver_postcode"]').val();
	var r_state = $('select[name="receiver_state"]').val();
	var r_others = $('input[name="receiver_others"]').val();
	var prod = $('.productName').length;
	if(s_name == ""){
		alert("Sender name cannot be empty");
		return false;
	}
	if(r_name == ""){
		alert("Receiver name cannot be empty");
		return false;
	}
	
	if(s_mobile == ""){
		alert("Sender mobile number cannot be empty");
		return false;
	}
	if(r_mobile == ""){
		alert("Receiver mobile number cannot be empty");
		return false;
	}
	if(s_address == ""){
		alert("Sender address cannot be empty");
		return false;
	}
	if(r_address == ""){
		alert("Receiver address cannot be empty");
		return false;
	}
	if(s_city == ""){
		alert("Sender city cannot be empty");
		return false;
	}
	if(r_city == ""){
		alert("Receiver city cannot be empty");
		return false;
	}
	if(s_poscode == ""){
		alert("Sender postcode cannot be empty");
		return false;
	}
	if(r_poscode == ""){
		alert("Receiver postcode cannot be empty");
		return false;
	}
	if(s_state == ""){
		alert("Sender state cannot be empty");
		return false;
	}
	if(r_state == ""){
		alert("Receiver state cannot be empty");
		return false;
	}else if(r_state == "Others"){
		if(r_others == ""){
			alert("Receiver state cannot be empty");
			return false;
		}
	}
	
	if(prod == 0){
		alert("Product cannot be empty");
		return false;
	}
	
	return true;
	
}

function orderDetailListener(titanium_bridge){
	Ti.App.addEventListener(titanium_bridge, function(e) {
		if(titanium_bridge == "app:getPendingList"){
			
			getStateSelector(e,'');
			//return true;
		}else{
			getStateSelector(e,'');
			getProductelector(e);
			if(titanium_bridge == "app:orderDetailsParam"){
				setTimeout(function(){ loadDetails(e);	},1500);
			}	
		}
	});
}


function getStateSelector(e){
    	$.getJSON( e.state+e.session, function( data ) {
			
		    if(data.status == 'error'){
		    	getStateSelector(e);
		    	return false;
		    }else{
		    	
		    	var preferred = data.selected_state;
		    	localStorage.setItem("stateArea",JSON.stringify(data.area));
		    	
		    	var item = '<select name="area" class="selector auto" id="selector_area" onChange="loadArea();" style="float:left;width:100%; ">';
				item += '<option value="">State</option>';
				$.each( data.state, function( key, val ) {
					var is_selected ="";
					if(preferred == key){
						is_selected ="selected";
					}
				  	item += '<option value='+key+' '+is_selected+'>'+ val + '</option>';
				});
				item += '</select>';
				$("#country_selector").html(item);	
				
				if(data.area[preferred]){
					var item2 = '<select name="area2" class="selector auto" id="selector_area2" onChange="loadArea2();" style="float:left;width:100%; ">';
					item2 += '<option value="">Area</option>';
				    $.each( data.area[preferred], function( area_id, area_name ) {
				    	
				      	item2 += '<option value='+area_id+'>'+ area_name + '</option>';
				    });
				    item2 += '</select>';
				    $('.staticBar').css('height','70px');
				    $('#pending_order_list').css('padding-top','75px');
				    
				    $("#areaDesc").show();	
					$("#areaSel").show();	
				    $("#area_selector").show();	
				    $("#area_selector").html(item2);	
				}
		    	
			    return true;
		    }
		});
	
}

function getProductelector(e){
	$.getJSON( e.product+e.session, function( data ) {
		//alert(data.status);
		//alert('web='+ localStorage.getItem("session"));
	    if(data.status == 'error'){
	    	getProductelector(e);
	    }else{
	    	var item = '<select name="sel_product" class="selector auto" id="sel_product" style="width:100%;">';
	    	item += '<option value="">-- Product--</option>';
		    $.each( data, function( key, val ) {
		      localStorage.setItem("prodName"+val.p_id, val.name);
    		  localStorage.setItem("prodQty"+val.p_id, val.quantity);
    		 // localStorage.setItem("prodPrice"+val.p_id, val.price);
		      item += '<option value='+val.p_id+'>'+ val.name + '</option>';
		    });
		    item += '</select>';
		    $("#product_selector").html(item);	
	    }
	});
}

/**
function onLoadPrice(){
	var pid = $("#sel_product").val();
	$("#price").val(localStorage.getItem("prodPrice"+pid));
}
**/
