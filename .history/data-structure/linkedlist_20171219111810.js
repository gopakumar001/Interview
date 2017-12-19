(function () {

    function Node(value) {
        this.value = value;
    }

    Node.prototype = Object.defineProperties({}, {
        _leftLink: {
            value: null,
            enumerable: false
        },
        _rightLink: {
            value: null,
            enumerable: false
        },
        leftLink: {
            enumerable: false,
            get: function () {
                return this._leftLink;
            },
            set: function (link) {
                this._leftLink = link;
            }
        },
        rightLink: {
            enumerable: false,
            get: function () {
                return this._rightLink;
            },
            set: function (link) {
                this._rightLink = link;
            }
        }
    });

})();

