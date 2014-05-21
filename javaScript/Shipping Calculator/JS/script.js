/*var Package = {
	fullCost: function(){
		return this.method1 * (this.destinationZip - this.originZip)
	}
}*/


$(document).ready(function(){
	$('form#shipping-rate').submit(function(event){
	event.preventDefault();

	var inputtedSelect = $('select').val();
	var inputtedOriginZip = $('#origin-zip').val();
	var inputtedDestinationZip = $('#destination-zip').val();


	var shippingMethod = function(){
		if(inputtedSelect === "Air-express"){
			inputtedSelect = 4;
		}
		else if(inputtedSelect === "Ground"){
			inputtedSelect = 3
		}
		else if(inputtedSelect === "Media-Mail"){
			inputtedSelect = 2
		}
		else{
			inputtedSelect = 5
		}
	}

shippingMethod();

	var zipCalculator = function(){
		parseInt(inputtedOriginZip);
		parseInt(inputtedDestinationZip);

		inputtedOriginZip = 0;

		if(inputtedDestinationZip>0 && inputtedDestinationZip<=10000){
			inputtedDestinationZip = 2;
		}
		else if(inputtedDestinationZip>10000 && inputtedDestinationZip<=20000){
			inputtedDestinationZip =3;
		}
		else if(inputtedDestinationZip>20000 && inputtedDestinationZip<=30000){
			inputtedDestinationZip =4;
		}
		else if(inputtedDestinationZip>30000 && inputtedDestinationZip<=40000){
			inputtedDestinationZip =5;
		}
		else if(inputtedDestinationZip>40000 && inputtedDestinationZip<=50000){
			inputtedDestinationZip =6;
		}
		else if(inputtedDestinationZip>50000 && inputtedDestinationZip<=60000){
			inputtedDestinationZip =7;
		}
		else if(inputtedDestinationZip>60000 && inputtedDestinationZip<=70000){
			inputtedDestinationZip =8;
		}
		else if(inputtedDestinationZip>70000 && inputtedDestinationZip<=80000){
			inputtedDestinationZip =9;
		}
		else if(inputtedDestinationZip>80000 && inputtedDestinationZip<=90000){
			inputtedDestinationZip =10;
		}
		else{
			inputtedDestinationZip =11;
		}
		return;
	}
zipCalculator();



var difference 
var distanceCalculator = function(){
	difference = (inputtedDestinationZip - inputtedOriginZip) 
	return;
};
distanceCalculator();

var rate1
var shippingRate = function(){
	rate1 =  (inputtedSelect * difference)
	return
};
shippingRate();


alert(rate1)

$('button').click(function(){
	$('#rate').show();
	$('ul#rates').append('<li>' + rate1 + '</li>');
	this.reset();
})
		
	$(this).find('input').val("");

	});
})
