//spread operator

let arr = [1, 2, 3];
let copy = [...arr];
copy.push(4);
// no change in original array


//-----------------------------------------------------
//destructuring 

let obj = {
    named: "phoe"
}

const {name} = obj;
console.log(named);

let arrr =[1,2, function(){
    console.log("hello")
}]
let [first, second, third] = arrr;

//-----------------------------------------------------
//import and export
 
function navbar() {
    return (
        <div>
            <h1>Navbar</h1>
        </div>
    );
}
export default navbar;

import navbar from "./prerequisites";

export function nav2(){

}

import {nav2} from "./prerequisites";



// arrow functions 

const functionn = () => {

}

functionn();

// with parameters: 
 const printting = params  => {
    console.log("hello" + params);
}
 const printting2 = (params)  => {
    console.log("hello" + params);
}

printting("phoe");

const abcs = () => 1;
console.log(abcs + 1);

//for returning objects : 

const objreturn = () =>({
    key : "123",
    named :  " pheo "
}) 

// map filter


// lessgo with map first : 
 
let array = [1,2,3,4,5,6,7,8,9,10];

const  ans = array.map( (value)=> value-1)

array.map( (element) =>{
    element>5? console.log(element) : console.log("hello")
})

array.filter( (element) => element>5)