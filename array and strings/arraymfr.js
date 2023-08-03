let arr=[1,2,3,4]
let a =arr.map((value)=>{
   
    return value+1;

})
console.log(a);
// map returns a new araay.
// difference between map and for each is that for each run as a loop for every element in array
//whereas map returns a new array 


// filter method
let arr2=[5,6,7,8]
let b = arr2.filter((value)=>{
    return value<7

})
console.log(b);

// reduce method
// this method reduces the whole array to a single value

let arr3=[9,10,11,12]
let c= arr3.reduce((h1,h2)=>{
   return h1+h2

})
console.log(c);