/**
 * Mammel class
 */
function Mammal(name) {
    this.name = name;
}
Mammal.prototype = {

};


/**
 * Cat Class
 */
function Cat() {}
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;