class User {
    constructor(public name: string , public age: number){

    }

    getName(){  // this is getter
        return this.name
    }
    //A getter is a method used to read or retrieve the value of a private or class property in a controlled way.
 
    setName(value: string){  //this is setter
        this.name = value
    }
    //A setter is a method used to update or modify the value of a property in a controlled way.
    
}

let u1 = new User("Harsh", 22)
console.log(u1);

console.log(
    u1.getName()
);



u1.setName("harshita")
console.log(
    u1.getName()
);

console.log(u1.name);
// console.log(u1.name="jfiji");
















































// this is the basic way og getter and setter by default . Which we commonly use in js
// here we use getter and setter as method 

// in typescriopt we use two different keyword for getter and setter i.e get and set

class User2{
    constructor(public _name: string, public age: number){

    }
    get name(){
        return this._name
    }

    set name(value: string){
        this._name = value
    }
}



let u2 = new User2("harsh",11)
console.log(u2);

// u1.name  // see here we use it as a property not a method unlike before

console.log(u2.name);
console.log(u2.name="fieji");


