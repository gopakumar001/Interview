/**
 * Creating person object.
 */
function Person() {
    Object.defineProperty(this, "name", {
        get: function() {
            return _private_var.name;
        },
        set: function(name) {
            _private_var.name = name;
        }
     });
}