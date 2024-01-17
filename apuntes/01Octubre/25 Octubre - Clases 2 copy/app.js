console.log("Prototipos");
Number.prototype.doble = function(){
    return this + this;
}


let n1 = 34;
console.log(n1.doble());
