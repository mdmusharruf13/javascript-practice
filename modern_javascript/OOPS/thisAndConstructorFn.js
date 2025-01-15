function Student(name, age) {
    this.name = name;
    this.age = age;

    this.getDetails = () => {
        console.log(`${this.name}'s age is ${this.age}`)
    }
}

const std = new Student("mush", 45);

std.getDetails();

/**
 * What happens when you use new keyword to create instance of constructor function:
 * 1.New Object Creation: A new object is created.
 * 2.Setting the Prototype: The new object's prototype is set to the constructor function's prototype.
 * 3.Binding this: The constructor function is executed with `this` bound to the new object, not the global object.
 * 4.Property Assignment: Inside the constructor function properties and methods assigned to `this` are added to the new object.
 * 5.Returning the New Object: The new object is returned, unless the constructor function explicitly returns another object.
 */

// without new keyword
const newStd = Student("habibi", 50); // both arguments are added to global object

console.log(this); // see the output in the browser console
console.log(name, age);


