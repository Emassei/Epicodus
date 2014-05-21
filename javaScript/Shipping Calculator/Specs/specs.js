describe('Package',function(){
	describe('fullCost',function(){
		it('takes all of the shipping criteria and returns a shiping rate',function(){
			var testRate = Object.create(Package);
			testRate.Package.method1 = "Air Express";
			testRate.Package.originZip = "12321";
			testRate.Package.destinationZip = "43243";
			testRate.fullCost().should.equal = " 5.00";
		});
	});
});