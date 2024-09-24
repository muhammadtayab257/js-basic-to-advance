let a = 10;
let b = 5;

console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus (remainder): 0
console.log(a ** b); // Exponentiation: 100000

let c = 1;
console.log(++c);  // Increment: 2
console.log(--c);  // Decrement: 1

// 2. Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6

x %= 4; // x = x % 4
console.log(x); // 2

// !  not sign

// 3. Comparison Operators
console.log(5 == "5");  // Equal to (type coercion): true
console.log(5 === "5"); // Strictly equal to: false
console.log(5 != "6");  // Not equal to: true
console.log(5 !== "5"); // Strictly not equal to: true
console.log(5 > 3);   // Greater than: true
console.log(5 < 3);   // Less than: false
console.log(5 >= 5);   // Greater than or equal to: true
console.log(5 <= 4);   // Less than or equal to: false

// and and && both conditions must be true
// or or ||  ya  any one condition can be true

// 4. Logical Operators
console.log(true && true); // Logical AND: true
console.log(true && false); // Logical AND: false
console.log(false && true); // Logical AND: false

console.log(false || false); // Logical OR: false
console.log(true || false); // Logical OR: true