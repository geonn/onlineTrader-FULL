var args = arguments[0] || {};

/** For footer More options**/
$.more.addEventListener('click', expandMoreMenu);

function expandMoreMenu(e){
	if(expandMoreMenu.__isExecuting) {
        return;
    }
    expandMoreMenu.__isExecuting = true;
	if(e.source.mod == 'more'){
		$.subfooter.animate({bottom:70,duration:500}, function(){ expandMoreMenu.__isExecuting = false;});
		$.more.image = "/images/icons/icon-more-active.png";
		e.source.mod = 'more_active';
		Ti.App.Properties.setString('module', 'dealer_more');
	}else{
		$.subfooter.animate({bottom:0,duration:500}, function(){ expandMoreMenu.__isExecuting = false;});
		$.more.image = "/images/icons/icon-more.png";
		Ti.App.Properties.setString('module', 'dealer_more');
		e.source.mod = 'more';
	}
	
}
