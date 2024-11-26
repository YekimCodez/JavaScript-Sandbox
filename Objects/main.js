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
        console.log(`${this.name.firstName} ${this.name.middleName} ${this.name.lastName} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name.firstName}.`);
    },
    firstInitial() {
        console.log(`My first initial is ${this.name.firstName[0]}`);
    },
};
