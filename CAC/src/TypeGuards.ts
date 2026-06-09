// type guard by TYPE  NARROWING
function a(arg: string | number |any){

    // arg.   //ethi dot lageile only sei method dekheiba jou guda only string and method re common thiba


    //can resolve this by type GUARD BY  type guarNARROWING

    if(typeof arg === "string"){
        // arg.  // dot lageila thu string ra methods show karuchi
        return "string";
    }
    else if (typeof arg === "number"){
        // arg.   // dot lageila thu number ra methods show karuchi
        return "number";
    }
    else{
        throw new Error("error")
    }



}

console.log(a("kfjio"))
console.log(a(73489379))

// console.log(a(true));



// type guard by TYPE OF INSTANCES

class TvKaRemote{
    switchTVoff(){
        console.log("Switching off tv");
        
    }
}
class CarKaRemote{
    switchCARoff(){
        console.log("Switching off car");
        
    }
}

const tv = new TvKaRemote()
const car = new CarKaRemote()

function switchoffKaro (device: TvKaRemote | CarKaRemote){
    if(device instanceof TvKaRemote){
        device.switchTVoff()
    }
    else if(device instanceof CarKaRemote){
        device.switchCARoff()
    }
}

// switchoffKaro();