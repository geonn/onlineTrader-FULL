$.backTitle.addEventListener("touchstart", function(e){
	this.setBackgroundColor("#fff");
	this.setColor("#e02222");
});

$.backTitle.addEventListener("touchend", function(e){
	this.setBackgroundColor("transparent");
	this.setColor("#fff");
});