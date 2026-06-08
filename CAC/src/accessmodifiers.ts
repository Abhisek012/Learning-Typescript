// class bottlemaker{

//      constructor(public name: string){  // in public you can change the variable value anywhere 
//          this.name = name

//         }
//         // nameChanging(){
//         //    this.name = "abhi"
//     //  }
// }

// let b1 = new bottlemaker("Milton") 
// console.log(b1);
// b1.name  = "heifhie";
// console.log(b1);



class bottlemaker2{

     constructor(private name: string){  // in public you can change the variable value anywhere 
         this.name = name

        }
        nameChanging(){
           this.name = "abhi"
     }
}

let b2 = new bottlemaker2("Milton") 
console.log(b2);
// b2.name  = "heifhie"; //in private it is not possible to change the value outside of the code and show you an error  but still ts will run this and  print heifhie instead of Milton

console.log(b2);


//But to run it without any error we have to do it with method which is accessible inside the constructor. 

b2.nameChanging()
console.log(b2);










