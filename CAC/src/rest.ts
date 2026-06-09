function num (...args: number[]){}

num(1,2,3,4,4,5,6)

// ... rest / spread
// there's two meaning of using ...  1) rest and 2) spread

// function ke parameter mein ager ... lagaya to aap waha par saare diye gye args ko ek ki variable mein as an array store kr sakte hai


function sum(... val: number[]){
    console.log(val);
    
}

sum(1,2,3,4,5,6,7,8,9,10)