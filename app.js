// string 
var m = "Hello type script";
m = "Hello ....";
console.log(m);
// number 
var num = 23;
num = 233;
console.log(num);
// Boolean 
var checking = true;
checking = false;
console.log(checking);
var anytype = "heloo";
//Arrays 
var arr = [1, 2, 4];
var arr1 = ["jai", "kumar"];
var arr2 = [1, "jai", 2, "kumar"];
//tuples=it has fixed length and fixed type
var user = ["jaikumar", 33];
//tuples in arrays 
var userData = [];
userData = [["aa", 20], ["bb", 30]];
//union =it accepts only string or number only
var person;
person = "jhoeogho";
person = 233;
var car = {
    name: "telsa",
    price: 200
};
// type Assertion 
// functions 
function add(a, b, c) {
    return a + b;
}
add(12, 22);
//return void == the function will not return anything
function log(message) {
    console.log(message);
}
log("message");
// never == this will not excute but throws an error
function error() {
    throw new Error("Networ Error");
}
var mobile = {
    title: "redmi",
    price: "nrihg"
};
var foo;
var myarray;
myarray = [1, 3,];
myarray.push(10);
console.log(myarray);
function sum(a, b) {
    return a + b;
}
var ad = sum(1, 3);
console.log(ad);
function sub(a, b) {
    return a;
}
console.log(sub(1));
