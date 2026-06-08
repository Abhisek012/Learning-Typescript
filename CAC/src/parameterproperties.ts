class User {
    constructor(public name: string, public age: number){

    }
}
// Parameter Properties: A TypeScript feature that allows class properties i.e name and age,  to be declared and initialized directly in the constructor parameters using access modifiers (public, private, or protected).

// 1. Declaration

// Declaration means telling the program that a variable or property exists and what type it has.

// public name: string;

// Here you're declaring a property named name of type string.

// At this point, no value has been assigned yet.

// 2. Initialization

// Initialization means giving a variable or property its first value.

// this.name = name;

// or

// public name: string = "Abhi";

// Now the property has been initialized.

// Example
// class User {
//     public name: string; // Declaration

//     constructor(name: string) {
//         this.name = name; // Initialization
//     }
// }
// In Parameter Properties
// class User {
//     constructor(public name: string) {}
// }

// TypeScript automatically does both:

// class User {
//     public name: string;      // Declaration

//     constructor(name: string) {
//         this.name = name;     // Initialization
//     }
// }

// So when people say:

// constructor(public name: string) declares and initializes the property,

// they mean:

// Declares → creates the name property.
// Initializes → assigns the constructor argument to it.

// A simple real-life analogy:

// Declaration  = Reserving a locker and putting your name on it.
// Initialization = Putting your books inside the locker.

// The locker exists after declaration, but it doesn't contain anything useful until it is initialized.