var LinkedList = (function () {

    function Node(value) {
        this._value = value;
        this._links = {
            left : null,
            right : null
        };
    };
    Node.prototype = {
        getLink : function(direction) {
            return this._links[direction];
        },
        setLink : function(direction) {
            return this._links[direction];
        },
        getValue: function() {
            return this._value;
        },
        setValue: function(value) {
            this._value = value;
        }
    };


    function LinkedList() {
        
    }

    return LinkedList;
})();

