describe('leapYear', function(){
	it('is false for a year that is not divisible by 4', function(){
		leapYear(1999).should.equal(false);
	});

	it('is true for most years divisible by 4', function(){
		leapYear(2012).should.equal(true);
	});
	it('is false for most years divisible by 100', function(){
		leapYear(1900).should.equal(false);
	});
});

/*1.The syntax is this, describe something, 'leapYear', 'lunar cycles', 'chairs', something, this is where you develop your initial idea. 
2. once established, it will run as a function i.e. do something
3. the function contains the point, it('a description of what you want it to do')
4. next, you will have your description declare a function that uses an example
5. the example, in this exercise, should equate to false, the syntax is quickly discernible, 
leapYear(someYear).should.equal(false)  
6. This is kind of strange to see the syntax applied so freely and discernible. */

// Kind of like a negative theology.
// we are defining what something is by what it is not.
