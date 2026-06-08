// Abstract class
abstract class BottleMaker {

    private secretCode = "123";     // Only BottleMaker can access
    protected name = "Milton";      // BottleMaker + child classes can access

    showSecret() {
        console.log(this.secretCode); // ✅ Allowed
    }

    abstract makeBottle(): void; // Must be implemented by child classes
}

class MetalBottleMaker extends BottleMaker {

    makeBottle() {
        console.log("Making metal bottle");
    }

    changeName() {
        this.name = "Cello"; // ✅ Allowed because name is protected

        // this.secretCode = "456"; // ❌ Error because secretCode is private
    }
}

// const b1 = new BottleMaker(); // ❌ Error (abstract class)

const b2 = new MetalBottleMaker();

b2.makeBottle();
b2.changeName();

// console.log(b2.name); // ❌ Error (protected)
// console.log(b2.secretCode); // ❌ Error (private)