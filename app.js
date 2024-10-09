// OLD CODE
function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function greet(name) {
    return 'Hello, ' + name;
  }
  
// NEW CODE
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const greet = name => `Hello, ${name}`;
