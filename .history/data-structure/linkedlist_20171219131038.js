var LinkedList = (function () {
    
    var nodeCount = 0;
    function generateNodeId() {
        return "node_"+nodeCount++;
    }

    function Node(value) {
        this._id = generateNodeId();
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
        },
        isEqual: function(node) {
            return this._id === node._id;
        }
    };


    function LinkedList() {
        this._head = null;
        this._tail = null;
    };
    LinkedList.prototype = {
        addValueToTail: function(value) {
            var node = new Node(value);
            if(!this._tail) {
                this._tail = node;
            }else {
                node.setLink("left", this._tail);
                this._tail.setLink("right", node);
                this._tail = node;
            }
        },
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

        deleteFromHead : function() {
            if(this._head) {
                var node = this._head.getLink("right");
                this._head = node;        
            }
        }, 

        
        deleteFromTail : function() {
            
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

