/*1. So this is a "short-hand" way of writing jquery
2. we put the document.ready function at the beginning 
3. now we dont have to do it for each item*/


/*$(document).ready(function(){

	$("h1").click(function(){
		alert("This is a header!")
	})

	$("p").click(function(){
		alert("This is a paragraph!");
	});

	$("img").click(function(){
		alert("This is an image!");
	});

	$("ol").dblclick(function(){
	alert("This is a DBL Click");
	});
	//Class selector below, use the .
	$(".Paragraph").hover(function(){
		prompt("What is you favorite color?");
	});
})*/
//------------------------------------------------------------------

//Simple effects!
//1. The big difference between class and an id 
//2. The difference is how many times an item may be called
//   a. The class can be used multiple times
//   b. whereas the id can only be used once. 

$(document).ready(function(){
	$(".clickable").click(function(){
		$("#initially-showing").toggle();
		$("#initially-hidden").toggle();
	});
});



















