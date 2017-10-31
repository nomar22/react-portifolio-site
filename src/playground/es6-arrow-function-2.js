
const add= (a, b) =>{
    //console.log(arguments);
    return a + b;
};

console.log(add(2,3,20));

const user = {
    name :'Rafael',
    cities : ['bh', 'contagem', 'brisbane'],
    printPlacesLived (){
    const cityMessages = this.cities.map((city)=>{
        return this.name +' has lived in ' + city;
    });


        return cityMessages;
    }
};

console.log(user.printPlacesLived());

//chalenge Aerea

const multiplier = {
    //number - array of numbers
    //multiplyBy - number
    // multiply - retunr a new array where number have been multiplied
    multiply(){
        
    }
};
console.log(multiplier.multiply());(1,2,3)
