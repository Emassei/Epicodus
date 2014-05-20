describe('Triangle',function(){
	describe('type',function(){
		it('considers three sides of a trinagle and returns if it is a equilateral, isosceles, or scalene triangle', function(){
			var testTri = Object.create(Triangle);
			testTri.side1 = 5;
			testTri.side2 = 5
			testTri.side3 = 5
			testTri.type().should.equal = "Equilateral Triangle"
		})
	})
})