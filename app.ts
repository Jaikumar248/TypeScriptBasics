
// string 

let m:string = "Hello type script";
m = "Hello ....";
console.log(m);
// number 
let num: number = 23;
num = 233;
console.log(num);
// Boolean 
let checking:boolean = true;
checking = false;
console.log(checking);

let anytype:any = "heloo";

//Arrays 
let arr:number[] = [1,2,4];
let arr1:string[] = ["jai", "kumar"];
let arr2:any[] = [1, "jai", 2, "kumar"];
//tuples=it has fixed length and fixed type
let user:[string, number] = ["jaikumar", 33];
//tuples in arrays 
let userData: [string, number][] = [];
userData = [["aa", 20], ["bb", 30]];
//union =it accepts only string or number only
let person: string | number;
person = "jhoeogho";
person = 233;
//Enum 




//objects 
type Car = {
    name: string,
    price: number
    
}
let car:Car = {
  name: "telsa",
  price: 200
}
// type Assertion 



// functions 
function add(a:number, b:number, c?:number):number {
    return a+b;
}
add(12, 22);
//return void == the function will not return anything
function log(message: string): void {
    console.log(message);
}
log("message");
// never == this will not excute but throws an error
function error():never {
    throw new Error("Networ Error")
}

//interfaces 

interface MobileInterface{
    title: string
    price: number
}
let mobile = {
    title: "redmi",
    price: "nrihg"
}

let foo: undefined;
let myarray: number[];
myarray = [1,3,];
myarray.push(10);
console.log(myarray);


function sum(a : number, b : number) {
    return a+b;
}
let ad = sum(1,3);
console.log(ad);

function sub(a : number, b?: number, c?: number): number {
    return a;
}
console.log(sub(1));

//implicit type  
let x =10;
let y = true;
let z = "hello";



function greets() : string {
    return "Good morning";
}
let greeting = greets();

let s;
s=10;
s="hfrhe";

let p : number | true | string;
 p = "yu4gre";
 p = true;