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
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        return cityMessages;
    }
};

console.log(user.printPlacesLived());

//chalenge Aerea

var multiplier = {
    //number - array of numbers
    //multiplyBy - number
    // multiply - retunr a new array where number have been multiplied
    multiply: function multiply() {}
};
console.log(multiplier.multiply());1, 2, 3;
