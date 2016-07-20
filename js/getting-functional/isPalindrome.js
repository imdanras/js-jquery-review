// isPalindrome(string)
// Checks if a string is a palindrome, and returns true or false

// Example Input

// var str = 'racecar';

// Example Output

// false


var isPal = function(n) {
  var z = '';
  for (var i = n.length-1; i >= 0; i--) {
    z += n[i];
  } if (z === n) {
    return true;
  } else
  return false;
};

isPal('racecar');
