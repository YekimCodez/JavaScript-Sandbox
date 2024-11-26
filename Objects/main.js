const person = {
    name: {
        firstName: 'Michael',
        middleName: 'Andre',
        lastName: 'Doughty',
    },    
    // fullName: ['Michael', 'Andre', 'Doughty'],
    age: 43,
    // Objects methods
    bio() {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.firstName}.`);
    },
    firstInitial() {
        console.log(`My first initial is ${this.firstName[0]}`);
    },
};
