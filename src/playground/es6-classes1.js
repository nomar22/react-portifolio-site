// Setup constructor to take name and age Default 0
// getDescription = andrew it 26 years old
class Person {

    constructor(name = 'Anonimo', age = 0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        // return 'Hi. I am ' + this.name  + '!';
        return `Hi. I am  ${this.name} !`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

const me = new Person('Rafael', 32);
const other = new Person();

console.log(me.getDescription());
console.log(other.getDescription());