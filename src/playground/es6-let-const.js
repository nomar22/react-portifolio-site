let nameVar='Egidio';
let nameVar='Rafael';
console.log('nameVar',nameVar);

let nameLet = 'Jen';

console.log('nameLet',nameLet);

const nameConst = 'Frank';
console.log('nameConst',nameConst);

function getPetName(){
    var petName = 'lua';
    return petName;
}

const petName = getPetName();

console.log(petName);

//Block scoping

const fullName = 'Rafael Egidio';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);