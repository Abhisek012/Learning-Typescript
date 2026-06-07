//  basic types
//  primmitive types (num , string , boolean)
//  Array
//  tuples
//  enums
//  any ,unknown ,void ,null ,undefined, never

// let a = 12;
// a = "harsh"

// let b = true
// b = 7;


// array: 

// let arr = [1,2,3,"harsh"]
// console.log(arr)

// let arr2 = [1,2,3,{name: "abhi"}]
// console.log(arr2);

// let arr3 = [1,2,3,{name: "abhi"},{value: 343}]
// console.log(arr3);

// // TYPESCRIPT:

// let arrts:number[] = [1,2,3,"harsh"]


// tuples:

// let arr: [string, number] = ["harsh",33];
// console.log(arr);


// ENUMS: (enumerations)


// enum UserRoles  {

//     ADMIN = "admin",
//     GUEST = "guest",
//     SUPER_ADMIN= "super_admin"
// }

// UserRoles.ADMIN // dot lageila thu hi option asigala amin , guest au super_admin bhitaru gte choose karibaku


// ANY:

// let a:any;  //any means typescript off
// a = 23;
// a = "harsh";
// console.log(a);


// //unknown
// let b: unknown;
// b = 33;
// b = "harsj"

// if(typeof b === "string"){
//     // b.  //dot lageila thu bohut option asiba like split, endwith etc etc , may be string properties.
// }

// //void

// function abcd():void{  //void means it is returning nothing
//     console.log("hey");
    
// }
// abcd()

// null

// let e:null;
// e  = 23; //type of a is null. can not assign anything rather than null
// console.log(e);


// let f = null;  //here type of f is any , not null
// f=23;

//UNDEFINED:

// let a:undefined; // it means a is never defined
// a = 56; //here a is defined . But in previous we said it is undefined. we can not define anything which type is undefined.


//NEVER

// function abcd():never{ //never aage ka function kko dull kardeta jo kabhi execute nhi ho payega.
//     while(true){
//         console.log("yo");
        
//     }
// }
// abcd();
// console.log("hey");


