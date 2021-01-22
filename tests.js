// Unit tests for the sayHello function.
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });

    //1,2
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });

    //3
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });

    //4
    it("should return the 'Hello, Alex!' when executed", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    //5
    it("should return the 'Hello, Pat!' when executed", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

    //8
    it("should return the 'Hello, World!' ", function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });

    it("should return the 'Hello, World!' if it true ", function() {
        expect(sayHello(true)).toBe("Hello, true!");
    });

    it("should return the 'Hello, World!' if it false ", function() {
        expect(sayHello(false)).toBe("Hello, false!");
    });

});


//Unit tests for the isEven number function
describe("isEven",function(){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean value', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed value of 10', function () {
        expect( isEven(2)).toBe(true);
    });
    it('should return true when passed value of -4', function () {
        expect( isEven(-4)).toBe(true);
    });
    it('should return true when passed Numeric string "8" ', function () {
        expect( isEven("8")).toBe(true);
    });
    it("should return false when passed the value 3",function () {
        expect(isEven(3)).toBe(false);
    });
    it("should return false when passed non-numeric string",function () {
        expect(isEven("Banana")).toBe(false);
    });
    it("should return false when passed Infinity",function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false when passed or logical operator",function () {
        expect(isEven(true) || isEven(false) ).toBe(false);
    });
    it("should return false when called without an argument ",function () {
        expect(isEven()).toBe(false);
    });
});

//Unit tests for isFive function
describe("isFive",function () {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean value", function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed value of 5', function () {
        expect( isFive(5)).toBe(true);
    });
    it("should return false when passed the value '5' ",function () {
        expect(isFive("5")).toBe(false);
    });
})

//Unit test for isVowel function
describe("isVowel", function (){
    it('should be defined as a function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it("should returns a boolean ",function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed "a"', function () {
        expect( isVowel("a")).toBe(true);
    });
    it('should return true when passed "A"', function () {
        expect( isVowel("A")).toBe(true);
    });
    it("should return false when passed the value 'y' ",function () {
        expect(isVowel("y")).toBe(false);
    });
    it("should return false when passed the value 4 ",function () {
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when called without an argument ",function () {
        expect(isVowel()).toBe(false);
    });
    it("should return false when passed non-numeric string",function () {
        expect(isVowel("Banana")).toBe(false);
    });
    it("should return false when passed or logical operator",function () {
        expect(isVowel(true) || isEven(false) ).toBe(false);
    });
})

//Unit test for isAdd function
describe("isAdd", function () {
    it('should be defined as a function', function () {
        expect(typeof isAdd).toBe("function");
    });

    it('should return the sum of two numbers', function () {
        expect(isAdd(3 ,2)).toBe(5);
    });
    it("should return one numeric-string values and another number", function () {
        expect(isAdd("5" ,6)).toBe(11);
    });
    it("should return two numeric-string values", function () {
        expect(isAdd("-4" ,"10")).toBe(6);
    });
    it("should takes two numeric string values", function () {
        expect(isAdd("-3" ,"-9")).toBe(-12);
    });
    it("should return NaN when passed non-numeric string", function () {
        expect(isAdd("banana" ,"split")).toBeNaN();
    });
    it("should return NaN when passed one non-numeric string and another number", function () {
        expect(isAdd(2 ,"apples")).toBeNaN();
    });
    it("should return NaN when passed no arguments", function () {
        expect(isAdd()).toBeNaN();
    });
});