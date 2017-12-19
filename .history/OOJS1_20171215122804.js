/**
 * Creating person object.
 */
var Person = {};

(function(obj) {
    var _private_var = {
        name : "Default name"
    };

    Object.defineProperty(obj.prototype, "name", {
        get: function() {
            return _private_var.name;
        },
        set: function(name) {
            _private_var.name = name;
        }
     });

})(Person);


