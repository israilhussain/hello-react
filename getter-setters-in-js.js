function Person(name, age) {
    let accountNumber = "10203949949";
    this.name = name;
    this.age = age;

    Object.defineProperty(this, 'accountNumber', {
        get: function() {
            return accountNumber;
        }
    })
}