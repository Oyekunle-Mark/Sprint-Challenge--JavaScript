// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (a, b, cb) => cb(a, b);

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (x, y) => console.log(x + y);
const multiply = (x, y) => console.log(x * y);
const greeting = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}, nice to meet you!`);

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====
// Explain in your own words why `nestedfunction()` can access the variable `internal`.
// Explanation: Every variable declared outside a function belongs to the global scope. Variables declared inside a function belongs to the
// local scope. A function can assess every variable in its local scope and its global scope. So the nestedFunction function can assess the
// internal variable because it is in its global scope. In javaScript, functions can reach out to its parent function
// for variables when it can not find the variable it wants in its local scope.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
