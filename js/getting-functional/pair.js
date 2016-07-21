// pair(obj)
// Construct array pairs from objects.

// Example Input

var obj = {
  "Brian": "Hague",
  "Sarah": "Hanley",
  "Lenny": "Urbanowski",
};

// Example Output

// [ [ 'Brian', 'Hague' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]


function forIn(obj) {
  var arr = [];
  for (var property in obj) {
    newArr = [];
    newArr.push(property);
    newArr.push(obj[property]);
    arr.push(newArr);
  }
  console.log(arr);
};
forIn(obj);

