
    const add= (a, b) =>{
        //console.log(arguments);
        return a + b;
    };

    console.log(add(2,3,20));

    const user = {
        name :'Rafael',
        cities : ['bh', 'contagem', 'brisbane'],
        placesLived (){     
            return this.cities.map((city)=>{
                let time = city!='brisbane'?' has lived ':' will live in ';
                return this.name +time+city+ '!';
            });
        }
    };

    console.log(user.placesLived());

const multiplier = {
    numbers : [1,2,3],
    multiplyBy:2,
    multiply(){
        return this.numbers.map((number)=> number * this.multiplyBy);
    }
    // numbers - array of numbers
    //multiplyBy - single number
    // multiply - retunr a new array where the number have been multiplied

};


console.log(multiplier.multiply());//{1,2,3} - {2,4,6}
console.log(multiplier.numbers);
