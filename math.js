//math.js
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return NaN;
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return NaN;
  return a - b;
}

module.exports = { add, subtract };


// --- Demo calls (for console output only) ---
// These logs are for demonstration purposes. The functions are still exported
// and used in unit tests. You can run `node math.js` to see example outputs.

console.log("=== Math.js Demo ===");
console.log("add(2, 3) =", add(2, 3));                   // 5
console.log("subtract(5, 2) =", subtract(5, 2));         // 3
console.log("add('a', 3) =", add('a', 3));               // NaN
console.log("subtract(undefined, 2) =", subtract(undefined, 2)); // NaN
console.log("==================");