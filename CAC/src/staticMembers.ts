class Hero{
   version = 1.0;  
  
}

// console.log(Hero.version); //(rc)
// Property 'version' does not exist on type 'typeof Hero'
// Here we cannot access version using Hero.version because version belongs to instances (objects) of the class, not to the class itself.

class Hero2{
    static version = 1.0
}

console.log(Hero2.version);
//here as we use static we can use the properties witout any object
//Static Property:
// A property that belongs to the class itself and can be accessed without creating an object.