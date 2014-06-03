$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();

		var inputtedBuzz = $('#buzzfizz-input').val();
		parseInt(inputtedBuzz,10);

		var buzzFizzCalc = function(){
			for(i=1;i<=inputtedBuzz;i++){
			if(i%3===0 && i%5===0){
				$('ul#list').append('<li>' + "BuzzFizz" + '</li>');
				}
			else if(i%3===0){
				$('ul#list').append('<li>' + 'Buzz' + '</li>');
				}
			else if(i%5===0){
				$('ul#list').append('<li>' + 'Fizz' + '</li>');
			}
			else{
				$('ul#list').append('<li>'+ i + '</li>');
			}
			}
		}
		buzzFizzCalc();
	});
});