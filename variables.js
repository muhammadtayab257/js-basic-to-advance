// there are three ways to declare a variable in javascript    var, let, const

var userName = "Test";
console.log(userName);
var userName = "Test Doe , after chaging the value";
console.log(userName);

let userName1 = "Test";
console.log(userName1);
userName1 = "Test Doe after chanignthe value";
console.log(userName1);

const userName2 = "Test";
// const userName2 = "Test Doe"; // This line will cause an error as you cannot reassign a const variable
console.log(userName2, "Im global variable not inside any function at my scope");

function anyFunction() {
    const userName2 = "Im inside a fnction an my scope is inside the function";
    console.log(userName2);
}
console.log(userName2);

anyFunction();