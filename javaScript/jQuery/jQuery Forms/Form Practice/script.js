$(document).ready(function(){
	$('#blanks form').submit(function(event){
		var person1Input = $("input#person1").val();
		var person2Input = $("input#person2").val();
		var noun1Input = $("input#noun1").val();
		var noun2Input = $("input#noun2").val();
		var verb1Input = $("input#verb1").val();
		var verb2Input = $("input#verb2").val();
		var noun3Input = $("input#noun3").val();
		var animalInput = $("input#animal").val();

		$('.person1').text(person1Input);
		$('.person2').text(person2Input);
		$('.noun1').text(noun1Input);
		$('.noun2').text(noun2Input);
		$('.verb1').text(verb1Input);
		$('.verb2').text(verb2Input);
		$('.noun3').text(noun3Input);
		$('.animal').text(animalInput);

		$('#story').show();

		event.preventDefault();
	});
});