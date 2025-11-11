function calculateArea(radius: number): number; //circle
function calculateArea(l: number, b: number): number; //rectangle
function calculateArea(a: number, b?: number): number {
  const PI = 3.14;
  if (b) {
    //formula for area of rectangle
    return a * b;
  } else return PI * a * a;
  
}

console.log(calculateArea(2,2))