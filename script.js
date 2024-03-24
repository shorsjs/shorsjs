function brb(number) {
    if (number % 2 === 0)
    {return "парне";}
else {return "непарне";}
}
var numbers = [10, 20, 21, 4, 5, 6, 7, 99, 0, 12, 13];
var парні = numbers.filter(function(number) {
    return number % 2 === 0;
});

var непарні = numbers.filter(function(number) {
    return number % 2 !== 0;
});

console.log("Парні числа: ", парні);
console.log("Непарні числа: ", непарні);
