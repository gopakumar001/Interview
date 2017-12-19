/**
 * Mammel class
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
        for(var i = 0; i < this.children.length; i++){
            console.log(this.children[i].toString());    
        }
    },
    toString : function() {
        console.log(this.constructor.name+" : "+this.name);
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