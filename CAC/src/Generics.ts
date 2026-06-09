// GENERICS
// GENERIC FUNCTIONS
// GENERIC INTERFACES
//  GENERIC CLASSES

// hamne ek funciton banana hai jo koi v value accept karega and usse print kar dega

function logger (a: any){  
    a   
}

logger("hey");

// Rule of thumb

// Use any when you genuinely don't care about the type.

// Use a generic when:

// The output type depends on the input type.


function abcd<H>(a: H, b: string, c: number) {
    return a;
}

const result = abcd("halua", "pudi", 34);
console.log(result);

// typescript automatically detect the type of a

// we don't need to mention explicitely <type> again in the funciton call

function log<T>(value:T){
    console.log(value);
    
}
log("hii!") // we don't need to write <string or anythig> here.BUt if we mention it will take only that datatype as input>
log(12)

// now we can give any type in input and we wil get resultant output


// genGENERIC INTERFERENCE

interface User<T>{
    name: string;
    age: number;
    key: T;
}


// function abcde(obj: User<string>){
    
// } // we can write this as this: which is better verion. 

function abcde<T>(obj: User<T>){
    
} 
abcde({name: "foo", age: 15, key: "7fh74"})

// here all these will work
abcde({
    name: "foo",
    age: 15,
    key: "abc"
});

abcde({
    name: "bar",
    age: 20,
    key: 123
});

abcde({
    name: "baz",
    age: 25,
    key: true
});


// GENERIC CLASSES

class BottleMaker<T> {
    constructor(public key: T){ }
}

let b1 = new BottleMaker("hey")  // here we can mention <type> but does not required
let b2 = new BottleMaker(12)
console.log(b1,b2);


//  A catch in GENERIC

function ab<T>(a:T  , b: T ):T {
    // return "hey";   // here everthing is T then why we can not return "hey" ?? 
    return "solution" as T // this is the solution of it
}

ab<string>("heu","hello");
// ab<number>(2,3);

// we can return a and b because these guarantee us to return as T but if every

//IT HAPPEN BECAUSE IF WE GIVE A NUMBER AS FUNCTION PARAMETER LIKE ab<number>(2,3); WE CAN NOT EXCEPT A STRING IN a. or b.   . same with string. If everything will be string so we can not except number. we typescript prevents this. 


//solution:
    // return "solution" as T // this is the solution of it
    //another way is type assertion. 

// we can use the variable properties only by type narrowning

function narrow<U>(a:U,b:U):U{
    if(typeof a=== "string"){
        a.length
    }
    return a 
}

narrow<string>("HELLO","HI")