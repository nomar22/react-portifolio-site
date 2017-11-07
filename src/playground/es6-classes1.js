// Setup constructor to take name and age Default 0
// getDescription = andrew it 26 years old
class Person {

    constructor(name = 'Anonimo', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi. I am ' + this.name  + '!';
        return `Hi. I am  ${this.name} !`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` and he is a student in ${this.major}`;
        }
        return description;
    }

}


class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I am visting from ${this.homeLocation}.`
        }
        return greeting;
    }



}
// Traveller -> Person
// Add suport for homeLocation
//Override getGreeting 
// 1. Hi. I am Egidio. I`m visting from Philiadelphia.
// 2 . Hi. I am Egidio.
const me = new Person('Rafael', 32);
const other = new Student();
const aluno = new Student('Aluno', 26, 'Computer Science');
const viajante = new Traveller('Egidio', 32, 'Contagem');
const forasteiro = new Traveller('Jhon');

// console.log(me.hasMajor());
console.log(other.getGreeting());
console.log(aluno.getGreeting());
console.log(viajante.getGreeting());
console.log(forasteiro.getGreeting());
