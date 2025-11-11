function calculateArea(a, b) {
    var PI = 3.14;
    if (b) {
        //formula for area of rectangle
        return a * b;
    }
    else
        return PI * a * a;
}
console.log(calculateArea(2, 2));
