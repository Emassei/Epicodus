var leapYear = function(year){
	if((year % 4 ===0)&&(year%100!==0)){
		return true;
	}
	else{
		return false;
	}
};
/*
var divisibleByFour = function(year){
	if(year % 4 === 0){
		return true;
	};
};

var divisibleByOneHundred = function(year){
	if(year % 100 ===0){
		return false;
	};
};*/
