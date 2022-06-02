//object
function Person(name, eyeColor, age) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function() {
        return ++this.age;
    };
}
let person01 = new Person('Daniel', 'Blue', 27);
let person02 = new Person('Luke', 'Green', 20);
let person03 = new Person('Sara', 'Brown', 11);
console.log(person01, person02, person03);