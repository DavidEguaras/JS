class Tripple {    
    static tripple(n) {
        n = n || 1; 
        return n * 3;    
    } 
}

class BiggerTripple extends Tripple {
    static tripple(n){
        return super.tripple(n) * 3;
    }
}

console.log(Tripple.tripple());
console.log(Tripple.tripple(3));
console.log(BiggerTripple.tripple());
console.log(BiggerTripple.tripple(3))