/*
function square(n)
{
    return n * n;
}
function cube(n)
{
    return n * n * n;
}
function sumOfSqaures(a, b)
{
    let s1 = square(a);
    let s2 = square(b);
    return s1 + s2;
}
function sumOfCubes(a, b)
{
    let s1 = cube(a);
    let s2 = cube(b);
    return s1 + s2;
}

let ans = sumOfCubes(1, 2);
console.log(ans);

*/

/* Why writing same structured code multiple times, use a single function which uses the same functionality 
use CALLBACK functions */
// CALLBACK is something which takes a function as an input 

function sq(n)
{
    return n * n;
}
function cube(n)
{
    return n * n * n;
}
function sumOfFun(a, b, fn)
{
    let sqOne = fn(a);
    let sqTwo = fn(b);
    return sqOne + sqTwo;
}

let res = sumOfFun(1, 2, sq);
let resTwo = sumOfFun(2, 3, cube);
console.log(res + " " + resTwo);