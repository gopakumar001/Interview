/**
 * Person parent class.
 * @param {String} name 
 */
function Person(name) {
    this.name = name;
}

Person.prototype = {
    getName: function() {
        return this.name;
    },
    setName: function(name) {
        this.name = name;
    }
}
