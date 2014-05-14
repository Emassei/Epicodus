/*$(document).ready(function(){
	$("h1").click(function(){
		$("p").slideToggle();
	});
});*/

/*$(document).ready(function(){
	$("button#hello").click(function(){
		$("ul").prepend("<li>Hello!</li>");
	});
	$("button#goodbye").click(function(){
		$("ul").prepend("<li>GoodBye!</li>");
	});
	$("button#stop").click(function(){
		$("ul").prepend("<li>Stop Copying Me!</li>");
	});
});
*/
//---------------------------------------------------------------------
$(document).ready(function(){
	$("button#hello").click(function(){
		$("ul#user").prepend("<li>Hello!</li>");
		$("ul#webpage").prepend("<li>Why hello There!</li>");


		$("ul#user").children("li").first().click(function(){
			$(this).remove();
		});
		$("ul#webpage").children("li").first().click(function(){
			$(this).remove();
		})
	});
	$("button#goodbye").click(function(){
		$("ul#user").prepend("<li>GoodBye!</li>");
		$("ul#webpage").prepend("<li>Good Bye dear user!</li>")
	});
	$("button#stop").click(function(){
		$("ul#user").prepend("<li>Stop Copying Me!</li>");
		$("ul#webpage").prepend("<li>The user copies!</li>");
	});
});

// We can also use .append method to make each new line item 
// be shown at the bottom of the list.