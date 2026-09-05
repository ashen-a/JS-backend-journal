function x() {
    var a = 7;
    function y() {
        console.log(a)
    }
    a = 100;
    return y;   //! whenever the function y is being returned it remembers the reference to a's memory location 
}
var z = x();
console.log(z);
// 1000 lines later
z(); //* 100 will be printed and not 7

// Another corner-case
function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            consolke.log(a, b)
        }
        y();
    }
    x();
}
z();
//* y forms a CLOSURE with both x,z -> Closure (x) & Closure (z) in Scope