class bottlemaker{
    // private name = "harsh"
    protected name = "harsh" 
}

class metalBottlemaker extends bottlemaker {
    public material = "metal";

    changename(){
        this.name = "some other name"  //here we get an error in typescript because we used private in bottlemaker  but it still changed the value in runtime. tha's why we use protected.
    }
    changenameAgain(){
        this.name = "hello"
    }
}

let b1 = new metalBottlemaker();
console.log(b1);
b1.changename()
console.log(b1);
b1.changenameAgain()
console.log(b1);


//protected means it is only be used in the same class and in the class which extends it. 