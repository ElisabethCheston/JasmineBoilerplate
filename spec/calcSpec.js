describe("Drink About", function() {
    describe("Age Check", function() {
        it("should have a value", function() {
			expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell what drink because the age is incorrect!");
        });
        it("should return Drink Toddy if age is 13", function() {
			expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });
        it("should return Drink Coke if age is 17", function() {
			expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("should return Drink Beer if age is 32", function() {
			expect(whatCanIDrink(19)).toBe("Drink Beer");
        });
        it("should return Drink Whiskey if age is 99", function() {
			expect(whatCanIDrink(99)).toBe("Drink Whiskey");
        });
        it("should return Drink Coke if age is 135", function() {
			expect(whatCanIDrink(135)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
    });
})

    /*
    beforeEach(function() {
        calc = new Calculator;
    });
    
    var calc = new Calculator;

    describe("Addition function", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it ("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});

*/
