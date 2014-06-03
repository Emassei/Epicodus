/*Pimitive Types 

undefined: undefined
null: null
boolean: true or false
string: "foo"
number: 3.14
object: {bar: "baz"}

----------------------------------------

Special Objects

function: function qux(){...}
array: ["hoge" 42]
RegExp: /qiyo/

------------------------------

objects: are key value pairs 
*/

/*var number1, number2;

number1 = 3.14;
number2 = number1;

number2 = 42;

In this, the variables are mutually exclusive, even if one of
the variables is equal to the other the variable is defined again
then the former change will not have any effect.

---------------------------------------------------------*/

/*var object1, object2;

object1 ={
	a:3.14
};

object2 = object1;

object2.a = 42

This is the difference it is not the object that changes but
the pathway to the new property

-------------------------------------------------------------
*/
/*
function myFunction(a,b){
	return 42;
}

myFunction.foo = "bar";
var function2 = myFunction;

function2();

---------------------------------------------------------
*/

/*The this keyword relies not on the function or where it was defined
but on the object. 

This only refers to each objects value.*/

/*function myMethod(){
	return this.val;
}

var object1 = {
	get: myMethod,
	val: 42
};

var object2 ={
	get: myMethod,
	val: 3.14
};

we can use myMethod.call(object1) to force a value for myMethod
which would revert back to object1.

-----------------------------------------------------------
*/

/*Prototypes

This is the fundamental manner of inheritence in JavaScript
when something is called like, greatGrandChild.get(),

the path of inheritence looks first to greatGrandChild
finds nothing, i.e. no get(),

thus it goes up the chain to grandChild
finds nothing

then goes to child 
finds nothing

then goes to the parent and finds the function where
get is a function that returns a value specific to 
whatever object it was called from i.e. this

so inheritence runs again, this time looking for a val
it starts with greatGrandChild 
finds nothing, no val

as a result it goes to grandChild to find a value
it does and returns 200

C:/Users/User/Desktop/JavaScript%20Objects/part%201.jpg

var parent = {
	get: function fn(){
		return this.val;
	},
	val:42
};

var child =Object.create(parent);
child.val = 3.14;

var grandChild = Object.create(child);
grandChild.val = 200;

var greatGrandChild = Object.create(grandChild);

-------------------------------------------------------
*/


/*Every object comes "prepackaged" with a prototype 
this prototype contains numerous methods that the object
has access to.

toString()
valueOf()
isPrototypeOf()
etc.

whereas the function has a prototype of its own which
contains its own methods
toSource()
toString()
apply()
etc.

but the function prototype has as its prototype 
the prior object prototype.

var myObject = {};
function myFunction(){};

var noPrototype = Object.create(null); 

-------------------------------------------------------
*/
/*
prototype chain where the children behave differently 
from their parents. 

this is called polymorphism 

We define the object answer with a method get that 
returns this.val

then we create an object firmAnswer where we define
a new get method specific for that object.

so when firmAnswer.get() is called it retuns 
the get method specific to that object, which returns

this.val which exists in the object answer and adds
!! at the end. 



C:/Users/User/Desktop/JavaScript%20Objects/part%203.jpg

var answer = {
	get: function fn1(){
		return this.val;
	},
	val: 42
};

var firmAnswer = Object.create(answer);
firmAnswer.get = function fn2(){
	return this.val + "!!";
}

but within this example we have some duplicted logic, 
as a result what we would want to do is to call function 
1 from function 2

---------------------------------------------------------
*/

/*In this exercise of prototype inheritence we want 
firmAnswer.get to return its own value much in the
same way it did before

but...

it wont, it is connected back to answer.get
thus giving the value 42.

we don't' want that, we want it do to the same thing
it did before, but without the duplicated logic

C:/Users/User/Desktop/JavaScript%20Objects/part%204.jpg

var answer = {
	get: function fn1(){
		return this.val;
	},
	val:42
};

var firmAnswer = Object.create(answer);
firmAnswer.get = function fn2(){
	return answer.get() + "!!";
};

firmAnswer.val = 3.14;

----------------------------------------------------
to the rescue comes answer.get.call(this)

here we still get to keep the same function but we can
now access the value corresponding to firmAnswer

var answer = {
	get: function fn1(){
		return this.val;
	},
	val: 42
};

var firmAnswer = Object.create(answer);
firmAnswer.get = function fn2(){
	return answer.get.call(this) + "!!";
}

firmAnswer.val = 3.14;*/

/*---------------------------------------------------------*/

/*Classes and instantation 

the common way to organize objects is to seperate methods
from data.

A class that extends another class is called a sub class

So FirmAnswerPrototype, because it is created from
AnswerPrototype, and then defines its own method
for FirmAnswerPrototype.get, is considered a sub-class

the prototypes are typically called classes whereas
the objects that extend them are called instances.
*/

/*
var AnswerPrototype = {
	get: function fn1(){
		return this.val;
	}
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14;

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2(){
	return AnswerPrototype.get.call(this) + "!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.val = 7;

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.val =3;*/

/*
Creating instances are called instantiation.
this has two steps
1. you create the object by refering back to the 
prototype 
2. and then you initalize its data

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;

The problem with this is that for each initializtion 
of data: 

lifeAnswer.val = 42 
dessertAnswer.val -3.14
etc.

we have to duplicate our logic

To the rescue we create a function to handle this.*/


/*---------------------------------------------------------*/

/*Here we add a second function, usually called constructor

In this val is changed to _val to indicated that this
particular value is private.


var AnswerPrototype = {
	constructor: function fn0(value){
		this._val = value;
	},
	get: function fn1(){
		return this._val;
	}
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14);

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2(){
	return AnswerPrototype.get.call(this) +"!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
*/

//---------------------------------------------------------

Classical model as distinct from the prototypal model







































