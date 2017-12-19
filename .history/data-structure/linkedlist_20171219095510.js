(function() {

    function Node(value) {
        this.value = value;
    }

    Object.defineProperties(Node.prototype, {
        leftLink : {
            value: {
                get: function() {
                    return this.leftLink;
                },
                set: function(link) {
                    this.leftLink = link;
                }
            }
        },
        rightLink : {
            value: {
                get: function() {
                    return this.leftLink;
                },
                set: function(link) {
                    this.leftLink = link;
                }
            }
        }
    });


})();