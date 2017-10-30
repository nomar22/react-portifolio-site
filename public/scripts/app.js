'use strict';

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(2, 3, 20));

var user = {
    name: 'Rafael',
    cities: ['bh', 'contagem', 'brisbane'],
    printPlacesLived: function printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);
    }
};

user.printPlacesLived();
