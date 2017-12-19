(function () {

    function Node(value) {
        this.value = value;
    }

    Object.defineProperties(Node.prototype, {
        leftLink: {
            get: function () {
                console.log("get");
                return this.leftLink;
            },
            set: function (link) {
                console.log("set");
                this.leftLink = link;
            }
        },
        rightLink: {
            get: function () {
                return this.rightLink;
            },
            set: function (link) {
                this.rightLink = link;
            }
        }
    });

})();