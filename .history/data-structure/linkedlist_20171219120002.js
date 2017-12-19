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
        setLink : function(direction, node) {
            return this._links[direction] = node;
        },
        getValue: function() {
            return this._value;
        },
        setValue: function(value) {
            this._value = value;
        }
    };


    function LinkedList() {
        this._head = null;
        this._tail = null;
    };
    LinkedList.prototype = {
        addValueToHead: function(value) {
            var node = new Node(value);
            if(!this._head) {
                this._head = node;
            }else {
                node.setLink("right", this._head);
                this._head.setLink("left", node);
                this._head = node;
            }
        },

        print: function() {
            var retVal = "",
                nxtNode = this._head;
            while(nxtNode) {
                if(retVal != "") {
                    retVal += " --> ";
                }
                retVal += nxtNode.getValue();
                nxtNode = nxtNode.getLink("right");
            }
            console.log(retVal);
        }
    };

    return LinkedList;

})();

