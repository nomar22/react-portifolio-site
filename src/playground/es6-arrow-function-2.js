
const add= (a, b) =>{
    //console.log(arguments);
    return a + b;
};

console.log(add(2,3,20));

const user = {
    name :'Rafael',
    cities : ['bh', 'contagem', 'brisbane'],
    printPlacesLived: function(){
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach
    }
};

user.printPlacesLived();
