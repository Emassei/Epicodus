describe("Contact", function(){
	describe("fullName",function(){
		it("Combines firstName and lastName seperated by a space", function(){
			var testContact = Object.create(Contact);
			testContact.firstName = "Dolly";
			testContact.lastName = "Parton";
			testContact.fullName().should.equal = "Dolly Parton";
		});
	});
});

describe("Address", function(){
	describe("fullAddress", function(){
		it("combines streetName, cityName, and stateName all seperated by space", function(){
			var testAddress = Object.create(Address);
			testAddress.streetName = "1234 Stevens";
			testAddress.cityName = "Portland";
			testAddress.stateName = "Oregon";
			testAddress.fullAddress().should.equal = "1234 Stevens Portland Oregon"
		})
	})
})














