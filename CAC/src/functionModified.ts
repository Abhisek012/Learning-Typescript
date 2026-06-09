function abcd(a: number):void;
function abcd (a: number , b:string):number;

function abcd(a:number , b?:string): void | number{
    if (typeof a === "number" && typeof b === "undefined" ){
        console.log("1");
        return;
    }
    if(typeof a === "number" && typeof b === "string"){
        return 123;
        
    }
    throw new Error ("Something is wrong")
}

abcd (67)
const x =  abcd(12,"Jhopa")
console.log(x);
