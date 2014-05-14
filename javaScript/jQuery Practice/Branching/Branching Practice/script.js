$(function(){
	$('button#dark').click(function(){
		$('body').removeClass();
		$('body').addClass('dark-background');
	})
	$('button#light').click(function(){
		$('body').removeClass();
		$('body').addClass('light-background');
	});
	$()

	var question = function(){
	var animal = prompt("what is your favorite animal? turtles, snakes, or bears?").toUpperCase();
	if(animal==='TURTLES'){
		$('#turtles').show();
		}
	else if(animal==='SNAKES'){
		$('#snakes').show();
	}
	else if(animal==='BEARS'){
		$('#bears').show();
	}
	else{
		alert("Enter either turtles, snakes or bears, come on, it's not that hard!");
		question();
	}	
}
question();
});

