let looparr=[1,2,3,4,5]
for(let  i =0;i<looparr.length;i++){
    console.log(looparr[i]);
}
console.log();// i use this to add space of one line in my input.
looparr.forEach((element)=>{
    console.log(element*element*element);
})

//now we will see modern way of writing for loop without doing that much efforts
// for___ of loop
for(let i of looparr){
    console.log(i);
}
//if we have to print key of array or indexes of array then we use for ---in loop .
for(let index in looparr){
    console.log(index);
}
// if we have to make array from other object or html collection then we use array.from

let  name="param"
let newarray=Array.from(name)
console.log(newarray);
