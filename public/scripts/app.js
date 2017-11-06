'use strict';

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(2, 3, 20));

var user = {
    name: 'Rafael',
    cities: ['bh', 'contagem', 'brisbane'],
    placesLived: function placesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            var time = city != 'brisbane' ? ' has lived ' : ' will live in ';
            return _this.name + time + city + '!';
        });
    }
};

console.log(user.placesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
    // numbers - array of numbers
    //multiplyBy - single number
    // multiply - retunr a new array where the number have been multiplied

};

console.log(multiplier.multiply()); //{1,2,3} - {2,4,6}
console.log(multiplier.numbers);
