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
        this._count = 0;
    };
    LinkedList.prototype = {
        addValue: function(direction, value) {
            direction = direction ? direction : "head";
            
            var newNode = new Node(value);
            if(this._count == 0){
                this._head = this._tail = newNode;
            }else {
                if(direction == "head") {
                    newNode.setLink("right", this._head);
                    this._head.setLink("left", newNode);
                }else {
                    newNode.setLink("left", this._tail);
                    this._tail.setLink("right", newNode);
                }
                this["_"+direction] = newNode;
            }

            this._count++;
        },
        
        delete : function(direction) {
            direction = direction ? direction : "head";
            var deletedNode;
            if(this._count === 1) {
                this._head = this._tail = null;
                deletedNode = this["_"+direction];
            }else if(direction === "head"){
                let node = this._head.getLink("right");
                deletedNode = this._head;
                this._head = node;
            }else if(direction === "tail"){
                let node = this._tail.getLink("left");
                deletedNode = this._tail;
                this._tail = node;
            }

            if(this._count > 0) {
                this._count--;
            }
            return deletedNode;
        },

        addValueToTail: function(value) {
            this.addValue("tail", value);
        },
        addValueToHead: function(value) {
            this.addValue(value);
        },

        deleteFromHead: function() {
            return this.delete();
        },
        deleteFromTail : function() {
            return this.delete("tail");
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

