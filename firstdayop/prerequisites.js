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