//Functions 
// function types

function abcd(): void{
    // return "heu";
}

  
function abcdef(name: string, cb: (value: string)=>void){

}
abcdef("harsj", (value: string)=>{
    console.log("value");
    
})

function User(name :string , age:number , cb: ()=> void){

}
User("Abh",33, ()=>{
    console.log("yo");
    
})

function GetName (Name: string , age: number , email: string, cb: (arg: string)=> void){
    cb("hi")
}

GetName("Abhisek", 21 , "abhisek@gmail.com", (arg: string)=>{
    console.log("hey !");
    console.log(arg);
    
})


// Optoinal and default paramerters

function detail (name: string, age: number , gender ?: string){

}

detail("abhi", 21 , "male")
detail("Harsh",22  )

function details_2 (name: string , age: number , gender: string = "not to be disclosed. "){
    console.log(name,age,gender);
}

details_2("abhi", 21 , "male")
details_2("arpit", 22 )