var numbers = [10, 20, 21, 4, 5, 6, 7, 99, 0, 12, 13];
numbers.sort(function(a, b) {
    return a % 2 - b % 2 || a - b;
});