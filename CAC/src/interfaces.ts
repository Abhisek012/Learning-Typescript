//interfaces
// defining interfaces
// using interfaces to define object shapes
// extending interfaces

// interface User{
//     name: string,
//     email: string,
//     password: string,
//     gender?: string //gender will become optional to pass an argument in ab()
// }

// function ab(obj:User ){
//     // obj. //dot lageila thu user ra features asuchi.

// }
// ab({name:"abhi", email:"jfie",password:"fjeoi"}) //have to write name , email and password all . but not required to mention gender.

//extending an interface

interface User{
    name: string,
    email: string,
    password: string
}

interface Admin extends User{
    admin: string
}
//funfact: two interfaces with same name combines both of it's properties

function abc(obj: Admin){
    // obj. //dot lageila thu Admin ra properties asila and User ra v properties asila.
}