// Type assertion

import { log } from "node:console";

// type assertion ka matlab batana ts ko ki uss particular cheej ka type kya hai, yeh hum tab karte hai jab hum typescriopt se zyada uss vaue ka type ko jante ho

let a : any = 12;

// (a as string).   // dot lageila thu string ra intelligence asijauchi

// another way:
// (<string>a).  // dot lageila thu string ra intelligence asijauchi



// TYPE CONVERTION

let b = Number("12") 
console.log(typeof b);

console.log(b)



// Non-Null Assertion Operator (!)

// Tells TypeScript that the value is definitely not null or undefined.
// It removes null and undefined from the type without performing any runtime check.
// Use it only when you're certain the value exists, otherwise it may cause runtime errors.

let c: null | string | undefined
c = "hei"

c!  // dot kama kare ethi v


//it has another work

// Definite Assignment Assertion
class User {
    name!: string;
}

// Tells TypeScript:

// "This property will definitely be assigned before it's used."