// -- -- -- -- -- -- -- -- -- -- -- - Interview Question-- -- -- -- -- -- -- -- -- -- -- -
//var vs let vs const
//Scope -> are of two type functional or block scope.

var a = 5; //var is functional scope but let and const are block scope

console.log(a);

// It means var can be access out side the block but let and const are not accessible
// outside theblock

function test() {
    var a = "Hello";
    let b = "Bye";

    if (true) {
        let a = "Hi"; //We can shadow let by var 
        // var b = "Goodbye"; // We can not shadow var by let
        console.log(a);
        console.log(b);
    }
}

//We can not redeclare a varible by using let & const.
//We cannot declare const without initializing it.
//We can't update const variable value.


//**-----------Hosting---------------**
//JavaScrpit is takes all the variable at the top of the code while execution its happen for var
// And let & const are also hosted but in temporal dead zone.

//map,filter and reduce

//what is map()?

const nums = [1, 2, 3, 4];
const multiplyThree = nums.map((num, i, arr) => {
    return num * 3;
})
console.log(multiplyThree);