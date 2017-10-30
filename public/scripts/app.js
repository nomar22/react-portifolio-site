'use strict';

var nameVar = 'Egidio';
var nameVar = 'Rafael';
console.log('nameVar', nameVar);

var nameLet = 'Jen';

console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'lua';
    return petName;
}

var petName = getPetName();

console.log(petName);

//Block scoping

var fullName = 'Rafael Egidio';
var firstName = void 0;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
