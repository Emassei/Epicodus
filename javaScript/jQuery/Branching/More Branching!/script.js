$(function(){
	$('form#insurance').submit(function(){
		var age = $('input#age').val();
		var gender = $('select#gender').val();

		
		if(age){
			var quote = (100 - age) * 3;
			if(gender ==='male' || age<26){
				quote += 50;
			}

			$('#rate').empty().append(quote);
			$('#quote').show();
		}else{
			alert('please enter your age.')
		}
		return false;
	});
});


//falsy: 0, NaN, undefined, null, false,""
//truthy: everything else. even "false"


