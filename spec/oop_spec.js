let myTest = require("../src/person");

let person = new myTest.Person('Ryan', 30, 'male', ['being a hardarse', 'agile', 'ssd hard drives'])

  describe ("function 'hello' in a class 'person'", function() {

  it("should return name", function() {
    expect(person.name).toEqual("Ryan");
  });


  it("should return age", function() {
    expect(person.age).toEqual(30);
  });


  it("should return gender", function() {
    expect(person.gender).toEqual("male");
  });

 
  it("should return interests", function() {
    expect(person.interests).toEqual(['being a hardarse', 'agile', 'ssd hard drives']);
  });

  describe("function 'Hello' in a class 'Person'", function () {
    
      it("returns greeting", function () {
        expect(person.Hello()).toEqual(`Hello, my name is Ryan and I am 30 years old. I'm a male, my interests are being a hardarse,agile,ssd hard drives`);
      });
  });
});
