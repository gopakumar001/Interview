/**
 * Mammel class
 */
function Mammal(name) {
    this.name = name;
}
Mammal.prototype = {
    toString : function() {
        console.log(this.constructor.name+" : "+this.name);
    }
};
Mammal.prototype.constructor = Mammal;


/**
 * Cat Class
 */
function Cat() {
    Mammal.apply(this, arguments);
}
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;