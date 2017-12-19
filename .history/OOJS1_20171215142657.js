/**
 * Mammel class
 */
function Mammal() {}
Mammal.prototype = {

};


/**
 * Cat Class
 */
function Cat() {}
Cat.prototype = new Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;