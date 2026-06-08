class user{
    constructor(public name: string , public age: number , public gender?: string){

    }
}

let u1 = new user ("harck", 23, "male")
console.log(u1);

let u2 = new user ( " laefj", 23)
console.log(u2);

// public gender?: string
// this gender? makes this field optional i.e. undefined in the output

// user { name: 'harck', age: 23, gender: 'male' }
// user { name: ' laefj', age: 23, gender: undefined }