
/*$(document).ready(function(){
	$("button").click(function(){
		$("ul").append("<li>This</li>");
		$("ul").children("li").click(function(){
			$(this).remove();
		});
	});
});*/
/*
$(document).ready(function(){
	$("button#danger").click(function(){
		$("ul").append("<li>danger</li>");
		$("ul").children("li").click(function(){
			$(this).remove();
		});
	});
});

$(document).ready(function(){
	$("button#warning").click(function(){
		$("ul").append("<li>Warning</li>");
		$("ul").children("li").click(function(){
			$(this).remove();
		});
	});
});

$(document).ready(function(){
	$("button#primary").click(function(){
		$("ul").append("<li>Primary</li>");
		$("ul").children("li").click(function(){
			$(this).remove();
		});
	});
});*/

//-----------------------------------------------------------------------------

/*$(document).ready(function(){
	$('#blanks form').submit(function(event){
		var person1Input = $("input#person1").val();
		var person2Input = $("input#person2").val();
		var animalInput = $("input#animal").val();
		var exclamationInput = $("input#exclamation").val();
		var verbInput = $("input#verb").val();
		var nounInput = $("input#noun").val();


		$('.person1').append(person1Input);
		$('.person2').append(person2Input);
		$('.animal').append(animalInput);
		$('.exclamation').append(exclamationInput);
		$('.verb').append(verbInput);
		$('.noun').append(nounInput);

		$('#story').show();

		event.preventDefault();
	});
});*/

1. to make this clear, .append is different from .text, in that .append adds text, so that each time you apply the method, more and more text will always be applied, whereas .text replaces the prior text you placed into the field.
2. now onto this strange .submit(function(event) and the event.preventDefault.
   a. When the form is submited it runs a function called event: 
   	  function(event).
   b. at the end of the jQuery the .event method is called to preventDefault:
      event.preventDefault();
   c. what is going on here is that by default the form wants to be submitted 
   	  somewhere, but it is not going anywhere because these perameters have 
   	  not be set, no destination has been set.
   d. What we are doing is preventing the form from being sent somewhere thus
   	  allowing it to be visible on the page.

$(document).ready(function(){
	$('#blanks form').submit(function(event){
		var person1Input = $("input#person1").val();
		var person2Input = $("input#person2").val();
		var animalInput = $("input#animal").val();
		var exclamationInput = $("input#exclamation").val();
		var verbInput = $("input#verb").val();
		var nounInput = $("input#noun").val();


		$('.person1').text(person1Input);
		$('.person2').text(person2Input);
		$('.animal').text(animalInput);
		$('.exclamation').text(exclamationInput);
		$('.verb').text(verbInput);
		$('.noun').text(nounInput);

		$('#story').show();

		event.preventDefault();
	});
});



