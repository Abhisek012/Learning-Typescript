class user {
    constructor(public readonly name: string){ // readonly throw error which says we can not change the value . BUt it would still run it and print the changed name.
        
    }
    changeName(){
        // this.name = "abhi"
    }
}

let u1 = new user("harsh")
console.log(u1); 
u1.changeName()
console.log(u1);

// user { name: 'harsh' }
// user { name: 'abhi' }