$(function(){
	$('form#ideas').submit(function(){
		var age = $('input#age').val();
		var ideology = $('input#ideology').val();

			if(age<21 && ideology==='conservative'){
				$('#sub21-conservative').show();
			}
			else if(age>=21 && ideology ==='conservative'){
				$('#over21-conservative').show();
			}
			else if(age<21 && ideology==='aristocratic'){
				$('#under21-aristocratic').show()
			}
			else if(age>=21 && ideology==='aristocratic'){
				$('#over21-aristocratic').show()
			}
			else{
				alert("please enter your age!")
			}
			return false;
	});
});