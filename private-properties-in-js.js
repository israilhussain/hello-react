function Person(name, age) {
    let a = 10;
    let b = 5;
    let c = function() { // this is in closure with a and b. a, b and function c is private properties
        return a + b;
    }

    this.name = name;
    this.age = age;

    this.getName = function() {
        return name
    }
    this.getAge = function() {
        return age
    }
    this.getSum = function() {
        return c();
    }
    this.getA = function() {
        return a;
    }
    this.getB = function() {
        return b;
    }
    this.setA = function(val) {
        a = val;
    }
    this.setB = function(val) {
        b = val;
    }
}