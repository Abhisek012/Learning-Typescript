// Type aliased
// Interface types

type sankhya = number;
let a: sankhya;

type arg = string | number | boolean;

function abcd(obj:arg){

}
abcd("hi")

// UNION AND INTERSECTIONS

let aaa : string | number //union
aaa = "jifdj"
aaa = 3

type user = {
    name: string,
    email: string
}

type admin = user &{
    getuserdetails(user:string):void
}

function abcde(a: admin){
    // a.  // dot lageila thu name , email and getuserdetail v asuchi
}

// // but this is not same as interface 
// //here 
// type user = number;
// type user = string;  //here we can not merge properties.

// interface ra kama object ra shape build kariba
// type ra kama hauchi type create kariba ,means datatypes ku use kariba

