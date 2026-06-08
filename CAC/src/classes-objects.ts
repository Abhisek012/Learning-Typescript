//class

// class device {
//     name = "lg";
//     price = "3k";
//     catagory = "digital"
// }

// let d2 = new device()
// let d1 = new device()

// console.log(d1);
// console.log(d2);

//constructor

// ek machine jo produce kr rhi hai final product

// class Bottlemaker {
//     constructor (public name: string , public price: number){

//     }
// }

// let b1 = new Bottlemaker("Milton", 300)
// console.log(b1);


// class Bottlemaker{
//     constructor(public name: string, public price: number, public color: string){

//     }
// }

// let b1 = new Bottlemaker("milton",300 , "white")
// console.log(b1);




// this keyword : method bahara kichi acces kariba pai constructor bahare this. keyword use karu

class abcd{
    name = "abhi";

    changeSomeStuff(){
        this.name = "hi"
    }

    changeSomeMoreStuff(){
        console.log("hey!");
        
        this.changeSomeMoreStuff();
    }
}

class Bottlemaker{
    constructor(public name: string){
       
    }
}

let b3 = new Bottlemaker("Milton")

// what happen in constructor(public name: string)

// 1. Creates a property named 'name' on the object.
// 2. Assigns the constructor argument to that property.

 // also we can write this as:

//  class Bottlemaker {
//     public name;
//     constructor(name:string){
//         this.name = name
//     }
//  }
//  let b3 = new Bottlemaker("milton")

// but the easy trick is to write this way:

class Bottlemaker2 {
    constructor(public name: string){

    }
}

let b4 = new Bottlemaker2("milton")
console.log(b4);

// so we learn three ways to write this