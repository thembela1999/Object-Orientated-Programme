class Person {
    constructor (name,age,gender,interests){
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
    }
    Hello() {  
           let hello = `Hello, my name is ${this.name} and I am ${this.age} years old. I'm a ${this.gender}, my interests are ${this.interests}`
    return hello;
}
}
// new instance
let person = new Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives'] )
let greeting = person.Hello();
console.log(greeting)
module.exports = {Person}