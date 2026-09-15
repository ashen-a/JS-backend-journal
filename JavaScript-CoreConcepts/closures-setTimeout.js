function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
}
x();

function x() {
  var i = 1;
  setTimeout(function () {
    // setTimeout takes a callback function
    console.log(i);
  }, 3000);
  console.log("Namaste JavaScript");
}
x();

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      // setTimeout takes a callback function
      console.log(i);
    }, 3000);
  }
  console.log("Namaste JavaScript");
}
x();
// *   OUTPUT -> Namaste Javascript 6 6 6 6 6
// * JS is working this way because of the closure
// * a function even when it is taken out of it's original scope it remembers it's LEXICAL ENV
// * All 5 copies of function () { console.log(i) }; remembers the REFERENCE to i
//! THE FIX : use 'let'
function x() {
  for (let i = 1; i <= 5; i++) {
    // every time the function is called it forms a closure with a new i
    setTimeout(function () {
      console.log(i);
    }, 3000);
  }
  console.log("Namaste JavaScript");
}
x();

//! FIX using var
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, 3000);
    }
    close(i)    //! we are creating a new copy of i everytime
  }

  console.log("Namaste JavaScript");
}
x();
