/*
CREATING "GLOBAL" VARIABLES
1. We created 4 variables for the game that can be used 
in each of the follwing functions
*/

var dimension = 20;
var chanceOfLiveCell = 0.5;
var table;
var cells;

//----------------------------------------------------

/*
HOW THE GAME IS RUN AND VALUES ARE GRABBED

1. This is the jquery command that runs the game and 
grabs values from the html
2. table grabs a value from the html
3. initializeGame() runs a particular function of the game
as will be defined below
4. table.find, finds all of the 'td' tags in the table 
and assigns them to the cells variable 
5. placeRandomCells() and playGame() are run */


$(document).ready(function(){
	table = $('#main');
	initializeGame();
	cells = table.find('td');
	placeRandomCells();
	playGame();
});

/*
HOW THE TABLE IS CREATED!
1. an empty array is created trHtml
2. a loop is then created where it will define the y 
axis and not exceed the defined dimension
3. for each iteration of the loop a <tr> tag is pushed 
into the empty array
   a. and for each tr tag a td tag with a space is placed 
     inside, the number of tr tags does not exceed the
     exceed the the defined dimension
4.closing the table, </tr> is pushed to finish the row.
5.the elements of the variable trHtml is then turned into
  a string through the .join() method. */



function initializeGame(){
	var trHtml = [];
	for(var y = 0; y <dimension; y++){
		trHtml.push('<tr>');
		for(var x=0; x<dimension; x++){
			trHtml.push('<td>&nbsp;</td>');
		}
		trHtml.push('</tr>');
	}
	trHtml = trHtml.join('');
	table.append($(trHtml));
}
/*
PLACING RANDOM CELLLS
1.a function is created that runs through all of the x and y iterations
2. a new variable is created that gets the value of x and y
3. an if statement is created where if a random number is larger than chanceOfLiveCell then
add a class to that particular cell, i.e. alive
4. if it is not, i.e. the random number is less than chance of the cell being alive then 
remove the class.*/


function placeRandomCells(){
	for(var y = 0; y <dimension; y++){
		for(var x=0; x<dimension; x++){
			var cell = getCell(x,y);
			if(Math.random() > chanceOfLiveCell) {cell.addClass('alive');}
			else { cell.removeClass('alive');}
		};
	};
};


//PLAY THE GAME, this is a little redundant but fine for this application
function playGame(){
	playGeneration();
}

/*DEFINE PLAYGENERATION
1.here we place the two functions inside to run under one 
2. setTimeout runs every fifth of a second, the 200 is 1/5 of a second, this is how often it is run
*/

function playGeneration(){
	prepareNextGeneration();
	renderNextGeneration();

	setTimeout('playGeneration()',200);
}

/*1. The function prepareNextGeneration is created where each y and x is created
   a. by this a number is associated with each x and y value
   b. and it iterates by x++ or y++ until is reaches its limit (dimension)
2. a variable is created where both of those values are assigned to it by
   a function defined later in the code
3. the variable neighbors serves the same purpose but is now used in regards
   to the neighbors, rather than the cell itself
4. cell.attr('isalive', 'false') sets the attribute of whether the cell is alive
   to false, thus it is dead.
   a. this is an inital state
5. then an if statement is created, where if cell is alive and if its neighbors
   are equal to 2 or 3 then it remains alive. 
6. an else if statement is then applied, where if the cell is dead, i.e. 'isalive', 'false', 
then it will become alive, i.e. 'isalive', 'false'*/

function prepareNextGeneration(){
	for(var y = 0; y <dimension; y++){
		for(var x=0; x<dimension; x++){
			var cell = getCell(x,y);
			var neighbors = getLiveNegighborCount(x,y);

			cell.attr('isalive','false');

			if(isCellAlive(x,y)){
				if(neighbors===2||neighbors===3){
					cell.attr('isalive','true');
				}
			}else if(neighbors===3){
				cell.attr('isalive','true');
			}
		}
	}
}

/*1. For each succesive generation we have to add or remove a class 
2. This is done by running through all of the cells 
3. if the cell is alive then it will add the class alive, keeping
   it alive
4. if this is not met it will remove the attribute alive, 
   in effect killing the cell.*/ 

function renderNextGeneration(){
	cells.each(function(){
		var cell = $(this);
		cell.removeClass('alive');
		if(cell.attr('isalive')==='true') cell.addClass('alive');
		cell.removeAttr('isAlive');
	});
};

/*GET THE NUMBER OF NEIGHBORS.
1. count is set to 0
2. for each cell the function allows the neighbors to be 'looked at'
3. it runs through all of the cells, through count++
4. returning the new count. 
*/


function getLiveNegighborCount(x,y){
	var count=0;
	if(isCellAlive(x-1,y-1)) count++;
	if(isCellAlive(x,y-1)) count++;
	if(isCellAlive(x+1,y-1)) count++;
	if(isCellAlive(x-1,y)) count++;
	if(isCellAlive(x+1,y)) count++;
	if(isCellAlive(x-1,y+1)) count++;
	if(isCellAlive(x,y+1)) count++;
	if(isCellAlive(x+1,y+1)) count++;
	return count;
}

/*IS ALIVE?
1. this returns the value of getcell and sets its class
to alive.

*/

function isCellAlive(x,y){
	return getCell(x,y).attr('class')==='alive';
}



/*GET THE PLACEMENT OF A CELL AND MAKE IT SO WE CAN RETURN TO EACH SIDE
1. This is so simple and amazing!
2. So the board is in theory 'infinte'  so we have to make each SIDE
   return to the other side of the board
3. this is done by making values greater than the dimension
   equal to zero 
4. additionally, if they are less than 0 their postion is placed
   one less, so that their postion is set back on the board.
5. The position of each value, x and y, is then returned to where
   the position of y is multiplied by the dimension 
       a. so we get a y coordinate
       b. and then we add the x 
       c. thus we get a position.*/

function getCell(x,y){
	if(x>= dimension){x=0}
	if(y>= dimension){y=0}
	if(x< 0){x= dimension -1}
	if(y<0){y=dimension-1}
	return $(cells[y*dimension+x]);	
}
