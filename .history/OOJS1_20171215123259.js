/**
 * Creating person object.
 */
function Person() {
    var name = "NA";
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(name) {
            name = name;
        }
     });
}