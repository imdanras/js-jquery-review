// fib(n)
// Return the nth number of the Fibonacci sequence.

// http://en.wikipedia.org/wiki/Fibonacci_number

// Example Input

// var number = 7;

// Example Output

// 13


var fib = function(num) {
  var gr = 1.61803398875;
  if (num == 1 || num == 2) {
    return 1;
  } else if (num === 0) {
    return 0;
  } else {
    console.log(Math.floor(((Math.pow(gr, num) - (Math.pow(-(gr), - (num))))
    /
    Math.sqrt(5))));
  }
}

fib(7);

// returns 13
