$(function(){
	$("button#green").click(function(){
		$("body").removeClass();
		$("body").addClass("green-background");
	});
	$("button#yellow").click(function(){
		$("body").removeClass();
		$("body").addClass("yellow-background");
	})
	$("button#red").click(function(){
		$("body").removeClass();
		$("body").addClass("red-background");
	})
	$("button#black").click(function(){
		$("body").removeClass();
		$("body").addClass("black-background");
		$("body").addClass("text-white");
	})
	$("button#default").click(function(){
		$("body").removeClass();
	})
	$("p#high").click(function(){
		$("p#high").addClass("border");
		$("p#high").addClass("highlight")
	});
});