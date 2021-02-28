$(function(){
	$(".bar-gnavi").on("click", function(){
		var rightVal = 0;
		if($(this).hasClass("open")) {
			rightVal = -300;
			$(this).removeClass("open");
		} else {
			$(this).addClass("open");
		}
		$(".menu-gnavi").stop ().animate({
			right: rightVal
		}, 200);
	});
});
