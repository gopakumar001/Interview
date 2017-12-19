/**
 * Person parent class.
 * @param {String} name 
 */
function Person(name) {
    this.name = name;
}

Person.prototype = {
    getName: function() {
        return this.name;
    },
    setName: function(name) {
        this.name = name;
    },
    toString: function() {
        return "Person: "+this.name;
    }
};

/**
 * Employee child class.
 * @param {String} name 
 * @param {String} company 
 */
function Employee(name, company){
    Person.call(this, name);
    this.company = company;
}

Employee.prototype = Object.create(Person.prototype, {
    getCompany : {
        value: function() {
            return this.company;
        }
    },

    setCompany: {
        value: function(company) {
            this.company = company;
        }
    },

    toString: {
        value: function() {
            return this.name+" works in "+this.company;
        }
    }
});

var gopa = new Employee("Gopakumar V", "Informatica");
