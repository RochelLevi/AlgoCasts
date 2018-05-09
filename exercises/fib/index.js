// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n < 2){
    return n
  }
  else{
    return fib(n - 1) + fib(n - 2)
  }
  // let negTwo = 0
  // let negOne = 1
  // let sum;
  //
  // if (n === 0){
  //   return negTwo
  // } else if (n === 1){
  //   return negOne
  // }
  //
  // for (let i = 2; i <= n; i++){
  //   sum = negOne + negTwo
  //   negTwo = negOne
  //   negOne = sum
  // }
  // return sum
}

module.exports = fib;
