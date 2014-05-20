var Triangle ={
	type: function(){
		return this.side1 + ", " + this.side2 + ", "+ this.side3
	}
}


$(document).ready(function(){

	$('form#new-triangle').submit(function(event){
		event.preventDefault();
	

	var inputtedSide1 = $('#side-1').val();
	var inputtedSide2 = $('#side-2').val();
	var inputtedSide3 = $('#side-3').val();

	var newTriangle = Object.create(Triangle);
	newTriangle.side1 = inputtedSide1;
	newTriangle.side2 = inputtedSide2;
	newTriangle.side3 = inputtedSide3;


	if(inputtedSide1 === inputtedSide3 && inputtedSide2 === inputtedSide1){
		$('#Equal-Triangle').show();
		$('ul#E-Tri').append('<li>' + newTriangle.type() + '</li>');
	}

	else if(inputtedSide1 === inputtedSide2 || inputtedSide2 === inputtedSide3 || inputtedSide3 === inputtedSide1){
		$('#Isosceles-Triangle').show();
		$('ul#I-Tri').append('<li>' + newTriangle.type() + '</li>');
	}
	else{
		$('#Scalene-Triangle').show();
		$('ul#S-Tri').append('<li>' + newTriangle.type() + '</li>')
	}



	$(this).find('input').val("");

	})
})







 /*var Triangle = {
 	type = function(){
 		return this.side1 
 	}
 }


 if(this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === side3){
 	alert("Isosceles Triangle")
 }
else if (this.side1 === this.side2 && this.side1=== this.side2){
	alert("equilateral Triangle")
}
else if ()*/

/* Perimeter 
 isosceles triangle = 2(a+b);
 equilateral triangle = 3(a);
 scalene triangle = a+b+c*/