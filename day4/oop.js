/* This in JavaScript
  `this` is a keyword whose value changes depending on how a function gets called.
  There six different ways where this can take on new values. They are:

  1- this in global context
  2- this in object construction
  3- this in an object method
  4- this in a simple function
  5- this in an arrow function
  6- this in an event listener
*/

// This in a global context
/* When this is called outside of any function, in a global context,
 this defaults to the Window object in the browser. */

// console.log(this) // Window

/*
Usually, you wouldn’t use this in a global context anyway, so the value of this
here doesn’t really matter. Let’s move on to the next context.
*/

// This in object construction -> will get more details in OOP section

/*
  When you create a new instance of an object with the new keyword,
  this refers to the instance.
*/

// function Person(age) {
//   this.age = age
// }
// //
// const mostafa = new Person(22)
// const mohamed = new Person(24)
// //
// console.log(mostafa) // this.age = 22
// console.log(mohamed) // this.age = 24
//


/*
  You can see that mostafa is an instance of Person in the code above.
 Now, whenever you reference mostafa, you won’t accidentally get mohamed.
 So, setting this to be the instance makes perfect sense.

Let’s look at a closely related context next – this in an object method.
*/

//This in an object method
/*
Methods are fancy words for functions that are associated with an object, like this:

(Note: Methods here are defined with the ES6 object literal shorthand.).
// search on this topic object literal shorthand
*/

// let o = {
//   // A method
//   aMethod () {}
// }

//this within any method refers to the object itself.

// let o = {
//   sayThis () {
//     console.log(this)
//   }
// }
//
// o.sayThis() // o

/*
Since this refers to the object, you can use methods to get the
instance of an object, like this
*/

// function Human (name) {
//   return {
//     name,
//     getName () {
//       console.log(this);
//       return this.name
//     }
//   }
// }
//
// const iti = new Human('ITI')
// const mo = new Human('Mo')
//
// console.log(iti.getName()) // ITI

/*
In these two object contexts, you can see that the changed value of this lets you get the right instance,
which is the basis for Object-oriented programming. will get more details within
OOP section
*/

//This in a simple function

/*
Simple functions are functions you know extremely well; like the one below.
Anonymous functions written in the same form are also considered simple functions.
*/
// function hello () {
//   // say hello!
// }

/*
On browsers, this is always set to Window in a simple function.
The same is true
even if you call a simple function in an object method.
*/

//
// function simpleFunction () {
//   console.log(this)
// }
// //
// const o = {
//   sayThis () {
//     simpleFunction()
//   }
// }
// //
// simpleFunction() // Window
// o.sayThis() // Window

/*
Unfortunately, the change in this is unexpected for beginners.
They expect this to remain the same within object methods.
I got caught in it too.

To see why, consider the following code.
Here, a this.speakLeet function is executed later within a setTimeout function.
*/

// const o = {
//   doSomethingLater () {
//     // this -> refer to o instance
//     setTimeout(function () {
//       // after invoke setTimeout -> this changed to Window objetc
//       this.speakLeet() // Error // window cannot access speakLeet inside o object
//     }, 1000)
//   },
//   speakLeet () {
//     console.log(`1337 15 4W350M3`)
//   }
// }
//
// o.doSomethingLater()
/*
Unfortunately, the code above results in an error.
The error occurs because this is set to Window in the setTimeout function.
 Window does not have a speakLeet method.

 One quick fix is to create a variable that stores the reference to the this.
  This variable is often called self or that.
*/

// const o = {
//   doSomethingLater () {
//     // const self = this
//     setTimeout(function () {
//       self.speakLeet()
//     }, 1000)
//   },
//   speakLeet () {
//     console.log(`1337 15 4W350M3`)
//   }
// }
// o.doSomethingLater()

/*
A second way to fix this problem is to use the new ES6 arrow functions,
which brings us to the next context.
*/

//This in arrow functions

/*
this in an arrow function is always the same as this around it
(in its immediate scope). So, if you use arrow functions within an object method,
the this context stays as the object, not Window.
With arrow functions, the speakLeet example could be written in the following way:

*/

// const o = {
//   doSomethingLater () {
//     setTimeout(() => this.speakLeet(), 1000)
//   },
//   speakLeet () {
//     console.log(`1337 15 4W350M3`)
//   }
// }
//
// o.doSomethingLater()

// This in event listeners
// within event lister section



// OOP

/*
So what is OOP?

Object-oriented programming (OOP) is a programming paradigm based on the concept
of “objects”, which can contain data,
in the form of fields (often known as attributes),
 and code, in the form of procedures (often known as methods).


 Object-Oriented Programming is a way of writing code that allows you to create
  different objects from a common object.
 The common object is usually called a blueprint while the created objects are
 called instances.

 Each instance has properties that are not shared with other instances.
  For example, if you have a Human blueprint,
  you can create human instances with different names.

 The second aspect of Object-Oriented Programming is about structuring code when
 you have multiple levels of blueprints. This is commonly called Inheritance or subclassing.

 The third aspect of Object Oriented Programming is about encapsulation where
 you hide certain pieces of information within the object so they’re not
  accessible.

  The main goal of developing OOP was organising the structure of the code.
   Using OOP, you can write more modular and maintainable code.
  You can associate the code with real-world entities.

  By using OOP, you make sure that only allowed members of one code
  is accessible to others. That makes your code fully secured
  to unauthenticated access (within the code).

  Object
  As I already mentioned above, Objects are like real-life entities.
  They have their properties and methods.

  Consider a car as an object. The car has so many characteristics like colour,
  company name, modal name and price, etc. On a car, we can perform actions
  like start, break, and stop. Here characteristics of a car are properties,
  and actions are methods.

  If you are using javascript for a while,
  you may use objects many times in your code but maybe not in an OOP way.


Class
Class is a blueprint of a real-life entity.
It describes how the object will look alike, what characteristics it holds and
what kind of actions we can perform on it.

Class is just a template. You can't perform any actions on it.
Consider class is your website UX Design(wireframes).
You create it to get an idea of how your website UI will look alike at the end.
Users can't do interactions with your wireframes as they will do on an actual
website.

We instantiate the object from a class. We can create many instances of a class.


What about private?

By default, all the properties declared in the class are public means you can
call and modify them from outside the class.
You can declare public properties in or out of the constructor.

What about private?
Hash(#) indicates that this property is private to the class and only methods
that are declared inside the class can access it.
Private properties should be declared before they were used.

To print/modify the private properties, we need getter/setter methods.
Here I have created one method that set the new password.


Encapsulation

Encapsulation is defined as binding the data and methods into a single unit to
 protect it from outside access. Just like a pill contains medication inside of
 its coating.

In the context of class, some properties are not directly accessed from
outside of the class. You need to call the responsible method for the properties.

Sounds familiar?

Yes, You guess it right. It's like creating a getter/setter method for
the private properties we declare in a class.


Abstraction

People often misunderstood encapsulation with abstraction.
Abstraction is one step ahead of encapsulation.
Abstraction is defined as showing only the essential t
hings and hiding the inner implementation.

Let's take an example of a car. On a Car,
we can perform some actions like start, break and stop.
Whenever you call one of these actions, it gives you some result.
 These actions have certain sub-actions which are hidden from you,
 but you don't need to care about those sub-actions.

This is how car company uses an abstraction of functionality to give their
customer a smooth experience.

// Abstract and interface make report about it

Inheritance
When one class derived the properties and methods of another
class it is called inheritance in OOP.
The class that inherits the property is known as subclass or child class and
the class whose properties are inherited is known as a superclass or parent class.

Why do we need inheritance?

Inheritance is a very important concept in OOP.
The main advantage of inheritance is reusability.
When a child class inherits from parent class we don't need to write
the same code again. It becomes very reliable when we need to
do some change in properties just change it in a parent class and
all the child classes will automatically inherit the change.
Inheritance also promotes code readability.


Polymorphism
Polymorphism means 'more than one form'.
Like us, We the software engineers can work on the frontend, backend,
 DevOps and even testing.

Polymorphism has two types.

  - Compile time Polymorphism
  - Runtime Polymorphism

Function overloading is a type of compile-time polymorphism.
Here, we are creating more than one function with the same name and
different parameters or types.

Function overloading is not supported in JavaScript because
if you create functions with the same name, Javascript
will override the last defined function with former functions.

Method overriding is a type of runtime polymorphism.
 Remember I told you that you can override the methods of
 parent class in the child class? That is method overriding.


*/

/*
JavaScript is not a class-based object-oriented language.
But it still has ways of using object oriented programming (OOP).

    a style of Object-oriented programming (OOP) in which inheritance occurs
    via defining classes of objects,
    instead of inheritance occurring via the objects alone
  The most popular model of OOP is class-based.

But as I mentioned, JavaScript isn't a classed-based langauge –
it's is a prototype-based langauge.

According to Mozilla's documentaion:

A prototype-based language has the notion of a prototypical object, an object
used as a template from which to get the initial properties for a new object.


*/

// let names = {
//     fname: "ITI",
//     lname: "PHP"
// }
// console.log(names.fname);
// console.log(names.hasOwnProperty("mname"));

/*
The object variable names has only two properties - fname and lname .
No methods at all.
So where does hasOwnProperty come from?
Well, it comes from the Object prototype.
*/
// console.log(names);

/*
You'll see a set of properties under the Object constructor.
All these properties are coming from the global Object prototype.
If you look closely, you'll also notice our hidden hasOwnProperty .
In other words, all objects have access to the Object's prototype.
They do not possess these properties, but are granted access
to the properties in the prototype.
*/

// Prototype

/*
In JavaScript, prototype refers to a system.
This system allows you to define
properties on objects that can be accessed via the object’s instances.
*/

/*
For example, an Array is a blueprint for array instances.
You create an array instance with [] or new Array().
*/


// const array = ['one', 'two', 'three']
// console.log(array)
//
// // Same result as above
// const array = new Array('one', 'two', 'three')
// console.log(array);
//
// /*
// If you console.log this array you won’t see any methods,
// but you can use methods like concat, slice, filter, and map!
// */
//
// const array = ["one", "two", "three"]
// console.log(array);

/*
Why?

Because these methods are located in the Array’s prototype.
You can expand the __proto__ object (Chrome Devtools) or <prototype> object
(Firefox Devtools) and you’ll see a list of methods.

NOte:-
Both __proto__ in Chrome and <prototype> in Firefox points to the Prototype
object, they’re just written differently in different browsers.


When you use map, JavaScript looks for map in the object itself.
If map is not found, JavaScript will try to look for a Prototype.
If JavaScript finds a prototype, it continues to search for map in that prototype.

So the correct definition for Prototype is: An object that instances can access
when they’re trying to look for a property.
*/

/*
The __proto__ property
This points to the object which is used as a prototype.

This is the property on every object that gives it access to the Object prototype property.

Every object has this property by default,
which refers to the Object Protoype except when configured otherwise
(that is, when the object's __proto__ is pointed to another prototype).
*/

//Prototype Chains

/*
Here’s what JavaScript does when you access a property:

Step 1: JavaScript checks if the property is available inside the object.
 If yes, JavaScript uses the property straight away.

Step 2: If the property is NOT inside the object, JavaScript checks
 if there’s a Prototype available. If there is a Prototype,
 repeat Step 1 (and check if the property is inside the prototype).

Step 3: If there are no more Prototypes left, and JavaScript cannot
find the property, it does the following:

  - Returns undefined (if you tried to access a property).
  - Throws an error (if you tried to call a method).

*/

/*
Modifying the __proto__ property
This property can be modified by explicitly stating that it should refer
to another prototype.
The following methods are used to achieve this
*/

// Object.create()
// function DogObject(name, age) {
//     let dog = Object.create(constructorObject);
//     dog.name = name;
//     dog.age = age;
//     return dog;
// }
// let constructorObject = {
//     speak: function(){
//         return "I am a dog"
//     }
// }
// let bingo = DogObject("Bingo", 54);
// console.log(bingo);
/*
Notice the __proto__ property and the speak method?

Object.create uses the argument passed to it to become the prototype.
*/
//new keyword
// function DogObject(name, age) {
//     this.name = name;
//     this.age = age;
// }
// DogObject.prototype.speak = function() {
//     return "I am a dog";
// }
// let john = new DogObject("John", 45);
// console.log(john);
/*
john's __proto__ property is directed to DogObject's prototype. But remember,
DogObject's prototype is an object (key and value pair),
 hence it also has a __proto__ property which refers to the global Object protoype.

This technique is referred to as PROTOTYPE CHAINING.

Note that: the new keyword approach does the same thing as
 Object.create() but only makes it easier as it does some things automatically
 for you.


 Object + Function Combination
You are probably confused by the fact that DogObject is a function
(function DogObject(){}) and it has properties accessed with a dot notation.
 This is referred to as a function object combination.
When functions are declared, by default they are given a lot of properties
attached to it. Remember that functions are also objects in JavaScript data types.
*/



// There are four ways to write Object-Oriented Programming in JavaScript. They are:

/*
  1- Using Constructor functions
  2- Using Classes
  3- Using Objects Linking to Other Objects (OLOO)
  4- Using Factory functions
*/
//Using Constructor functions
//Constructors are functions that contain a this keyword.

// function Human(firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
//   // new = Object.create()
// }
//
// //this lets you store (and access) unique values created for each instance.
// // You can create an instance with the new keyword.
// const iti = new Human('ITI', 'PHP')
// console.log(iti);
// console.log(iti.firstName) // ITI
// console.log(iti.lastName) // PHP
// //
// const iti2 = new Human('ITI-2', 'JS')
// console.log(iti2);
// console.log(iti2.firstName) // ITI-2
// console.log(iti2.lastName) // JS

// Class syntax

/*
Classes are said to be the “syntactic sugar” of Constructor functions.
As in, Classes are an easier way of writing Constructor functions.
*/

//Classes can be written with the following syntax:
//
// class Human {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }

/*
Notice the constructor function contains the same code as the Constructor
 syntax above? We need to do this since we want to initialize values into this.
 (We can skip constructor if we don’t need to initialize values.
More on this later under Inheritance).
*/

// const chris = new Human('Chris', 'Coyier')
// //
// console.log(chris.firstName) // Chris
// console.log(chris.lastName) // Coyier

// Objects Linking to Other Objects (OLOO)

/*
OLOO was coined and popularized by Kyle Simpson. In OLOO,
you define the blueprint as a normal object.
You then use a method (often named init,
but that isn’t required in the way constructor is to a Class)
to initialize the instance.
*/

// const Human = {
//   init(firstName, lastName ) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }
//
// //You use Object.create to create an instance. After creating the instance,
// //you need to run your init function.
//
// const chris = Object.create(Human)
// chris.init('Chris', 'Coyier')
// //
// console.log(chris.firstName) // Chris
// console.log(chris.lastName) // Coyier

//You can chain init after Object.create if you returned this inside init.

// const Human = {
//   init () {
//     // ...
//     return this
//   }
// }
//
// const chris = Object.create(Human).init('Chris', 'Coyier')
// console.log(chris.firstName) // Chris
// console.log(chris.lastName) // Coyier

//Factory functions
/*
Factory functions are functions that return an object.
You can return any object. You can even return
a Class instance or OLOO instance — and it’ll still be a valid Factory function.
Here’s the simplest way to create Factory functions:
*/
// function Human (firstName, lastName) {
//   return {
//     firstName,
//     lastName
//   }
// }
//
// // You don’t need new to create instances with Factory functions.
// // You simply call the function.
//
// const chris = Human('Chris', 'Coyier')
// //
// console.log(chris.firstName) // Chris
// console.log(chris.lastName) // Coyie

// Declaring properties and methods

//Methods are functions declared as an object’s property.

// const someObject = {
//   someMethod () { /* ... */ }
// }

/*
In Object-Oriented Programming, there are two ways to declare properties and
methods:

  1- Directly on the instance
  2- In the Prototype
Let’s learn to do both
*/

//Declaring properties and methods with Constructors

/*
  If you want to declare a property directly on an instance,
 you can write the property inside the constructor function.
 Make sure to set it as the property for this.
*/
// function Human (firstName, lastName) {
//   // Declares properties
//   this.firstName = firstName
//   this.lastname = lastName
// // }
//   // Declares methods
//   this.sayHello = function () {
//     console.log(`Hello, I'm ${firstName}`)
//   }
// }
//
// const chris = new Human('Chris', 'Coyier')
// chris.sayHello()

 /*
 Methods are commonly declared on the Prototype because Prototype allows
 instances to use the same method. It’s a smaller “code footprint.”
 To declare properties on the Prototype, you need to use the prototype property.
 */

//  function Human (firstName, lastName) {
//   this.firstName = firstName
//   this.lastname = lastName
// }
//
// // Declaring method on a prototype
// Human.prototype.sayHello = function () {
//   console.log(`Hello, I'm ${this.firstName}`)
// }
// const chris = new Human('Chris', 'Coyier')
// console.log(chris)

//It can be clunky if you want to declare multiple methods in a Prototype.
// Declaring methods on a prototype
// Human.prototype.method1 = function () { /*...*/ }
// Human.prototype.method2 = function () { /*...*/ }
// Human.prototype.method3 = function () { /*...*/ }

// You can make things easier by using merging functions like Object.assign.

// Object.assign(Human.prototype, {
//   method1 () { /*...*/ },
//   method2 () { /*...*/ },
//   method3 () { /*...*/ }
// })


//Declaring properties and methods with Classes
//You can declare properties for each instance inside the constructor function.

// class Human {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//       this.lastname = lastName
//
//       this.sayHello = function () {
//         console.log(`Hello, I'm ${firstName}`)
//       }
//   }
// }

// const ahmed = new Human('ahmed', 'ITI')
// console.log(ahmed);
/*
It’s easier to declare methods on the prototype.
You write the method after constructor like a normal function.
*/

// class Human{
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//    this.lastname = lastName
//  }
//
//   sayHello () {
//     console.log(`Hello, I'm ${this.firstName}`)
//   }
// }
// const ahmed = new Human('ahmed', 'ITI')
// console.log(ahmed);

/*
It’s easier to declare multiple methods on Classes compared to Constructors.
You don’t need the Object.assign syntax. You just write more functions.

Note:
Note: there’s no , between method declarations in a Class.

*/

// Declaring properties and methods with OLOO
// You use the same process for declaring properties and methods on an instance.
// You assign them as a property of this.

// const Human = {
//   init (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.sayHello = function () {
//       console.log(`Hello, I'm ${firstName}`)
//     }
//
//     return this
//   }
// }
//
// const chris = Object.create(Human).init('Chris', 'Coyier')
// console.log(chris)

// To declare methods in the prototype, you write the method like a normal object.

// const Human = {
//   init () { /*...*/ },
//   sayHello () {
//     console.log(`Hello, I'm ${this.firstName}`)
//   }
// }

// Declaring properties and methods with Factory functions
//You can declare properties and methods directly by including them in the returned object.

// function Human (firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     sayHello () {
//       console.log(`Hello, I'm ${firstName}`)
//     }
//   }
// }
//
// const ahmed = Human('ahmed', 'iti')
// console.log(ahmed);
/*
You cannot declare methods on the Prototype when you use Factory functions.
 If you really want methods on the prototype, you need to return a Constructor,
  Class, or OLOO instance.
 (Don’t do this since it doesn’t make any sense.)
*/

// // Do not do this
// function createHuman (...args) {
//   return new Human(...args)
// }

////////////////////////////////////////////////////////////////////////////////

// Classes vs. Factory functions — Inheritance

/*
  1- Inheritance
  2- Encapsulation
  3- this

  What is Inheritance?
  Inheritance is a loaded word. Many people in the industry use Inheritance
  incorrectly, in my opinion. The word “inheritance” is used when you receive
  things from somewhere. For example:

  If you get an inheritance from your parents, it means you get money and assets
  from them.
  If you inherit genes from your parents, it means you get your genes from them.
  If you inherit a process from your teacher, it means you get that process
  from them.
  Fairly straightforward.

  In JavaScript, Inheritance can mean the same thing:
  where you get properties and methods from the parent blueprint.

  This means all instances actually inherit from their blueprints.
  They inherit properties and methods in two ways:

  by creating a property or method directly upon creating the instance
  via the Prototype chain

  There’s a second meaning for Inheritance in JavaScript — where you create a
  derivative blueprint from the parent blueprint.
  This process is more accurately called Subclassing,
  but people sometimes will call this Inheritance as well.

  Understanding Subclassing
  Subclassing is about creating a derivative blueprint from a common blueprint.
  You can use any Object-Oriented Programming flavor to create the Subclass.

  We’ll talk about this with the Class syntax first because
  it’s easier to understand.

  Subclassing with Class
  When you create a Subclass, you use the extends keyword.
*/

// class Child extends Parent {
//   // ... Stuff goes here
// }

//For example, let’s say we want to create a Developer class from a Human class.


// // Human Class
// class Human {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
//
//   sayHello () {
//     console.log(`Hello, I'm ${this.firstName}`)
//   }
// }
//
// // The Developer class will extend Human like this:
//
// class Developer extends Human {
//   constructor(firstName, lastName) {
//     super(firstName, lastName)
//   }
//
//     // Add other methods
// }

//Note: super calls the Human (also called the “parent”) Class. It initiates the constructor from Human.
//If you don’t need extra initiation code, you can omit constructor entirely.

// class Developer extends Human {
//   // Add other methods
// }

//Let’s say a Developer can code. We can add the code method directly to Developer.

// class Developer extends Human {
//   code (thing) {
//     console.log(`${this.firstName} coded ${thing}`)
//   }
// }
//Here’s an example of an instance of Developer:

// const chris = new Developer('Chris', 'Coyier')
// console.log(chris)

/*
There are four steps to creating Subclasses with Factory functions:

  1- Create a new Factory function
  2- Create an instance of the Parent blueprint
  3- Create a new copy of this instance
  4- Add properties and methods to this new copy
The process looks like this:
*/

// function Subclass (...args) {
//   const instance = ParentClass(...args)
//   return Object.assign({}, instance, {
//     // Properties and methods go here
//   })
// }

//We’ll use the same example — creating a Developer Subclass —
// to illustrate this process. Here’s the Human factory function:

// function Human (firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     sayHello () {
//       console.log(`Hello, I'm ${firstName}`)
//     }
//   }
// }

//We can create Developer like this:

// function Developer (firstName, lastName) {
//   const human = Human(firstName, lastName)
//   return Object.assign({}, human, {
//     // Properties and methods go here
//   })
// }

//Then we add the code method like this:

// function Developer (firstName, lastName) {
//   const human = Human(firstName, lastName)
//   return Object.assign({}, human, {
//     code (thing) {
//       console.log(`${this.firstName} coded ${thing}`)
//     }
//   })
// }

//Here’s an example of a Developer instance :

// const chris = Developer('Chris', 'Coyier')
// console.log(chris)


// Overwriting the Parent’s method

/*
Sometimes you need to overwrite the Parent’s method inside the Subclass. You can do this by:

  1- Creating a method with the same name
  2- Calling the Parent’s method (optional)
  3- Changing whatever you need in the Subclass’s method
The process looks like this with Classes:
*/

// class Developer extends Human {
//   sayHello () {
//     // Calls the parent method
//     super.sayHello()
//
//     // Additional stuff to run
//     console.log(`I'm a developer.`)
//   }
// }
//
// const chris = new Developer('Chris', 'Coyier')
// chris.sayHello()


//The process looks like this with Factory functions:

// function Developer (firstName, lastName) {
//   const human = Human(firstName, lastName)
//
//   return Object.assign({}, human, {
//       sayHello () {
//         // Calls the parent method
//         human.sayHello()
//
//         // Additional stuff to run
//         console.log(`I'm a developer.`)
//       }
//   })
// }
//
// const chris = new Developer('Chris', 'Coyier')
// chris.sayHello()


//Understanding Composition
/*
Composition is the act of combining two things into one.
It’s about merging things together. The most common (and simplest)
way of merging objects is with Object.assign.


*/


// const one = { one: 'one' }
// const two = { two: 'two' }
// const combined = Object.assign({}, one, two)

/*

The use of Composition can be better explained with an example.
Let’s say we already have two Subclasses, a Designer and Developer.
Designers can design, while developers can code.
Both designers and developers inherit from the Human class.
*/
// class Human {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
//
//   sayHello () {
//     console.log(`Hello, I'm ${this.firstName}`)
//   }
// }
//
// class Designer extends Human {
//   design (thing) {
//     console.log(`${this.firstName} designed ${thing}`)
//   }
// }
//
// class Developer extends Designer {
//   code (thing) {
//     console.log(`${this.firstName} coded ${thing}`)
//   }
// }



/*
Now let’s say you want to create a third Subclass.
This Subclass is a mix of a Designer and a Developer — they can design and code.
 Let’s call it DesignerDeveloper (or DeveloperDesigner, whichever you fancy).

How would you create the third Subclass?

We cannot extend Designer and Developer classes at the same time.
This is impossible because we cannot decide which properties come first.
This is often called The Diamond Problem.

The Diamond Problem can be easily solved if we do something like Object.assign
 – where we prioritize one object over the other.
 If we use the Object.assign approach, we may be able to extend classes like this.
But this is not supported in JavaScript.
*/

// Doesn't work
// class DesignerDeveloper extends Developer, Designer {
//   // ...
// }


/*
So we need to rely on Composition.

Composition says: Instead of trying to create DesignerDeveloper via Subclassing,
 let’s create a new object that stores common features
 . We can then include these features whenever necessary.

In practice, it can look like this:

*/

// const skills = {
//   code (thing) { /* ... */ },
//   design (thing) { /* ... */ },
//   sayHello () { /* ... */ }
// }

//Here’s the code for DesignerDeveloper:

// class DesignerDeveloper {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//
//     Object.assign(this, {
//       code: skills.code,
//       design: skills.design,
//       sayHello: skills.sayHello
//     })
//   }
// }

// const chris = new DesignerDeveloper('Chris', 'Coyier')
// console.log(chris)
//
// //You can do the same with Developer and Designer.
//
// class Designer {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//
//     Object.assign(this, {
//       design: skills.design,
//       sayHello: skills.sayHello
//     })
//   }
// }
//
// class Developer {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//
//     Object.assign(this, {
//       code: skills.code,
//       sayHello: skills.sayHello
//     })
//   }
// }


/*
Did you notice we’re creating methods directly on the instance?
This is just one option. We can still put methods into the Prototype,
but I think the code looks clunky. (It’s as if we’re writing
Constructor functions all over again.)
*/

// class DesignerDeveloper {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }
//
// Object.assign(DesignerDeveloper.prototype, {
//   code: skills.code,
//   design: skills.design,
//   sayHello: skills.sayHello
// })

//Composition with Factory Functions
//Composition with Factory functions is essentially adding the shared methods into the returned object.
// function DesignerDeveloper (firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     code: skills.code,
//     design: skills.design,
//     sayHello: skills.sayHello
//   }
// }

//Inheritance and Composition at the same time
//Using the example we’ve ironed out so far, Designer, Developer,
//and DesignerDeveloper Humans are still humans. They can extend the Human object.
// class Human {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
//
//   sayHello () {
//     console.log(`Hello, I'm ${this.firstName}`)
//   }
// }
//
// class DesignerDeveloper extends Human {}
// Object.assign(DesignerDeveloper.prototype, {
//   code: skills.code,
//   design: skills.design
// })


//And here’s the same thing with Factory functions:

// function Human (firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     sayHello () {
//       console.log(`Hello, I'm ${this.firstName}`)
//     }
//   }
// }
//
// function DesignerDeveloper (firstName, lastName) {
//   const human = Human(firstName, lastName)
//   return Object.assign({}, human, {
//     code: skills.code,
//     design: skills.design
//   }
// }


//Subclassing in the real world
// event listener next session

//Classes vs. Factory functions — Encapsulation
/*

We’v looked at the four different Object-Oriented Programming flavors so far.
Two of them — Classes and Factory functions — are easier to use compared
to the rest.

But the questions remain: Which should you use? And why?

To continue the discussion on Classes and Factory functions,
we need to understand three concepts that are tied closely
to Object-Oriented Programming:

  Inheritance
  Encapsulation
  this
We just talked about Inheritance. Now let’s talk about Encapsulation.

Encapsulation
Encapsulation is a big word, but it has a simple meaning.
Encapsulation is the act of enclosing one thing inside another
 thing so the thing inside doesn’t leak out. Think about storing
 water inside a bottle. The bottle prevents water from leaking out.

In JavaScript, we’re interested in enclosing variables
(which can include functions) so these variables don’t
leak out into the external scope. This means you need
to understand scope to understand encapsulation.
 We’ll go through an explanation,

*/
// Simple Encapsulation
// The simplest form of Encapsulation is a block scope.

// {
//   // Variables declared here won't leak out
// }

// When you’re in the block, you can access variables that are declared outside the block.
// const food = 'Hamburger'
//
// {
//   console.log(food)
// }

//But when you’re outside the block, you cannot access variables that are declared inside the block
// {
//   const food = 'Hamburger'
// }
//
// console.log(food)

// Encapsulating with functions
/*
Functions behave like block scopes. When you declare a variable inside a function, they cannot leak out of that function.
This works for all variables, even those declared with var.
*/

// function sayFood () {
//   const food = 'Hamburger'
// }
//
// sayFood()
// console.log(food)

//Closures
// next session

//Encapsulation and Object-Oriented Programming
/*
When you build objects, you want to make some properties publicly available
(so people can use them).
But you also want to keep some properties private
(so others can’t break your implementation).

Let’s work through this with an example to make things clearer.
 Let’s say we have a Car blueprint. When we produce new cars,
 we fill each car up with 50 liters of fuel.
*/

// class Car {
//   constructor () {
//     this.fuel = 50
//   }
// }
//
// // Here we exposed the fuel property. Users can use fuel to get the amount of fuel left in their cars.
// const car = new Car()
// console.log(car.fuel) // 50
// // Users can also use the fuel property to set any amount of fuel.
//
// const car = new Car()
// car.fuel = 3000
// console.log(car.fuel) // 3000
/*
Let’s add a condition and say that each car has a maximum capacity of 100 liters.
 With this condition, we don’t want to let users set the
 fuel property freely because they may break the car.

There are two ways to do prevent users from setting fuel:

  Private by convention
  Real Private Members
*/

//Private by convention

//In JavaScript, there’s a practice of prepending underscores to a variable name. This denotes the variable is private and should not be used.

// class Car {
//   constructor () {
//     // Denotes that `_fuel` is private. Don't use it!
//     this._fuel = 50
//   }
// }
// We often create methods to get and set this “private” _fuel variable.

// class Car {
//   constructor () {
//     // Denotes that `_fuel` is private. Don't use it!
//     this._fuel = 50
//   }
//
//   getFuel () {
//     return this._fuel
//   }
//
//   setFuel (value) {
//     this._fuel = value
//     // Caps fuel at 100 liters
//     if (value > 100) this._fuel = 100
//   }
// }

// Users should use the getFuel and setFuel methods to get and set fuel.

// const car = new Car()
// console.log(car.getFuel()) // 50
//
// car.setFuel(3000)
// console.log(car.getFuel()) // 100

/*
But _fuel is not actually private. It is still a public variable.
You can still access it, you can still use it,
and you can still abuse it (even if the abusing part is an accident).
// */
// const car = new Car()
// console.log(car.getFuel()) // 50
//
// car._fuel = 3000
// console.log(car.getFuel()) // 3000

// Real Private Members

//Private Members with Classes
// Classes let you create private members by prepending # to the variable.
// class Car {
//   constructor () {
//     this.#fuel = 50
//   }
// }

// Unfortunately, you can’t use # directly inside a constructor function.

// You need to declare the private variable outside the constructor first.

// class Car {
//   // Declares private variable
//   #fuel
//   constructor () {
//     // Use private variable
//     this.#fuel = 50
//   }
// }

// In this case, we can use a shorthand and declare#fuel upfront since we set fuel to 50.

// class Car {
//   #fuel = 50
// }

// You cannot access #fuel outside Car. You’ll get an error.

// const car = new Car()
// console.log(car.#fuel)

// You need methods (like getFuel or setFuel) to use the #fuel variable.


// class Car {
//   #fuel = 50
//
//   getFuel () {
//     return this.#fuel
//   }
//
//   setFuel (value) {
//     this.#fuel = value
//     if (value > 100) this.#fuel = 100
//   }
// }
//
// const car = new Car()
// console.log(car.getFuel()) // 50
//
// car.setFuel(3000)
// console.log(car.getFuel()) // 100

// Getter and Setter
// class Car {
//   #fuel = 50
//
//   get fuel () {
//     return this.#fuel
//   }
//
//   set fuel (value) {
//     this.#fuel = value
//     if (value > 100) this.#fuel = 100
//   }
// }
//
// const car = new Car()
// console.log(car.fuel) // 50
//
// car.fuel = 3000
// console.log(car.fuel) // 100

// Private Members with Factory functions

/*
Factory functions create Private Members automatically.
You just need to declare a variable like normal.
Users will not be able to get that variable anywhere else.
This is because variables are function-scoped and hence encapsulated by default.
*/
// function Car () {
//   const fuel = 50
// }
//
// const car = new Car()
// console.log(car.fuel) // undefined
// console.log(fuel) // Error: `fuel` is not defined
//

// We can create getter and setter functions to use this private fuel variable.


// function Car () {
//   const fuel = 50
//
//   return {
//     get fuel () {
//       return fuel
//     },
//
//     set fuel (value) {
//       fuel = value
//       if (value > 100) fuel = 100
//     }
//   }
// }
//
// const car = new Car()
// console.log(car.fuel) // 50
//
// car.fuel = 3000
// console.log(car.fuel) // 100

// Classes vs. Factory Functions — The this variable

// Using this in Classes
/*
this refers to the instance when used in a Class.
(It uses the “In an object property / method” context.)
This is why you can set properties and methods
on the instance inside the constructor function.
*/

// class Human {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     console.log(this)
//   }
// }
//
// const chris = new Human('Chris', 'Coyier')

//Using this in Constructor functions
/*
If you use this inside a function and new to create an instance,
this will refer to the instance. This is how a Constructor function is created.

*/
// function Human (firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
//   console.log(this)
// }
//
// const chris = new Human('Chris', 'Coyier')


// Using this in a Factory function
// The correct way to use this in a Factory function is to use it “in an object property / method” context.

// function Human (firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     sayThis () {
//       console.log(this)
//     }
//   }
// }
//
// const chris = Human('Chris', 'Coyier')
// chris.sayThis()


/*
Even though you can use this in Factory functions,
you don’t need to use them.
You can create a variable that points to the instance.
Once you do this, you can use the variable instead of this.
 Here’s an example at work.
*/

// function Human (firstName, lastName) {
//   const human = {
//     firstName,
//     lastName,
//     sayHello() {
//       console.log(`Hi, I'm ${human.firstName}`)
//     }
//   }
//
//   return human
// }
//
// const chris = Human('Chris', 'Coyier')
// chris.sayHello()


//Detailed example

/*
Here’s the setup. Let’s say we have a Human blueprint.
This Human ha firstName and lastName properties, and a sayHello method.

We have a Developer blueprint that’s derived from Human.
 Developers can code,
  so they’ll have a code method.
  Developers also want to proclaim they’re developers,
   so we need to overwrite sayHello and add I'm a Developer to the console.

We’ll create this example with Classes and Factory functions.
 (We’ll make an example with this and an example
 without this for Factory functions).
*/

//The example with Classes

//First, we have a Human blueprint. This Human has a firstName and lastName properties, as well as a sayHello method.
// class Human {
//   constructor (firstName, lastName) {
//     this.firstName = firstName
//     this.lastname = lastName
//   }
//
//   sayHello () {
//     console.log(`Hello, I'm ${this.firstName}`)
//   }
// }
//
// //We have a Developer blueprint that’s derived from Human. Developers can code, so they’ll have a code method.
//
// class Developer extends Human {
//   code (thing) {
//     console.log(`${this.firstName} coded ${thing}`)
//   }
// }
//
// /*
// Developers also want to proclaim that they’re developers.
// We need to overwrite sayHello and add I'm a Developer to the console.
// We do this by calling Human‘s sayHello method. We can do this using super.
//
// */
//
// class Developer extends Human {
//   code (thing) {
//     console.log(`${this.firstName} coded ${thing}`)
//   }
//
//   sayHello () {
//     super.sayHello()
//     console.log(`I'm a developer`)
//   }
// }

// The example with Factory functions (with this)
// Again, first, we have a Human blueprint. This Human has firstName and lastName properties, as well as a sayHello method.

// function Human () {
//   return {
//     firstName,
//     lastName,
//     sayHello () {
//       console.log(`Hello, I'm ${this.firstName}`)
//     }
//   }
// }

// Next, we have a Developer blueprint that’s derived from Human. Developers can code, so they’ll have a code method.
// function Developer (firstName, lastName) {
//   const human = Human(firstName, lastName)
//   return Object.assign({}, human, {
//     code (thing) {
//       console.log(`${this.firstName} coded ${thing}`)
//     }
//   })
// }

/*
Developers also want to proclaim they’re developers.
 We need to overwrite sayHello and add I'm a Developer to the console.
We do this by calling Human‘s sayHello method.
 We can do this using the human instance.
*/
// function Developer (firstName, lastName) {
//   const human = Human(firstName, lastName)
//   return Object.assign({}, human, {
//     code (thing) {
//       console.log(`${this.firstName} coded ${thing}`)
//     },
//
//     sayHello () {
//       human.sayHello()
//       console.log('I\'m a developer')
//     }
//   })
// }

// The example with Factory functions (without this)

// Here’s the full code using Factory functions (with this):

// function Human (firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//     sayHello () {
//       console.log(`Hello, I'm ${this.firstName}`)
//     }
//   }
// }
//
// function Developer (firstName, lastName) {
//   const human = Human(firstName, lastName)
//   return Object.assign({}, human, {
//     code (thing) {
//       console.log(`${this.firstName} coded ${thing}`)
//     },
//
//     sayHello () {
//       human.sayHello()
//       console.log('I\'m a developer')
//     }
//   })
// }

// without this
// function Human (firstName, lastName) {
//   return {
//     // ...
//     sayHello () {
//       console.log(`Hello, I'm ${firstName}`)
//     }
//   }
// }
//
// function Developer (firstName, lastName) {
//   // ...
//   return Object.assign({}, human, {
//     code (thing) {
//       console.log(`${firstName} coded ${thing}`)
//     },
//
//     sayHello () { /* ... */ }
//   })
// }

// https://chamikakasun.medium.com/javascript-factory-functions-vs-constructor-functions-585919818afe
//diff between factory and constructor
