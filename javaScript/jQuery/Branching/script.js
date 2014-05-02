$(document).ready(function(){
	$('button#dark').click(function(){
		$('body').removeClass();
		$('body').addClass('background-dark');
	});
	$("button#light").click(function(){
		$('body').removeClass();
		$('body').addClass("background-light");
	});
});

/*$(function(){
	var age=parseInt(prompt("how old are you?"));

	if(age>21){
		$('#drinks').show();
	}else if(age===21){
		alert("Now don't go crazy!")
		$('#drinks').show();
	}
	else
	$('#under-21').show();
});*/

/*$(function(){
	var over21=confirm("Are you over 21?");

	if(over21){
		$('#drinks').show();
	}
	else{
		$('#under-21').show();
	}
});*/

//Either we can use the function with the variable or not, 
//  if not we can just stick the confirm into the if statement.

$(function(){
	if(confirm("Are you over 21?")){
		$('#drinks').show();
	}
	else{
		$('#under-21').show();
	}
});