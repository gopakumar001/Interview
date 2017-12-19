/**
 * Mammel class
 * Importance of proptotype.constructor 
 */
function Mammal(name) {
    this.name = name;
    this.children = [];
}
Mammal.prototype = {
    haveChild : function(name) {
        this.children.push(new this.constructor(name));
    },
    showChildren: function() {
        for(let i = 0; i < this.children.length; i++){
            this.children[i].toString();    
        }
    },
    toString : function() {
        return this.constructor.name+" : "+this.name;
    }
};



/**
 * Cat Class
 */
function Cat() {
    Mammal.apply(this, arguments);
}
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;