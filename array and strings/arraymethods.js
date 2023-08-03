let num=[3,4,56,78];
console.log(num);
let b=num.toString();
console.log(b);
let c =num.join("-");// we can use here any symbol to join the array like #,@,*,& and also any word like "and", "or".
console.log(c);
console.log(typeof num);// object
console.log(typeof b);// string
console.log(typeof c);// string
let p = num.pop()
console.log(num,p);
let q= num.push(63)// push returns length of rhe new array.
console.log(num,q);
let r = num.shift()// shift removes first element of an array and return it
console.log(num,r);
let s =num.unshift(34)
console.log(num,s);// add element to the begining and return length 

//more methods of javascript
let std=[1,2,3,4,5,6]
console.log(std.length);
delete std[0]
console.log(std);// so by deleting it the answer will be instead of one there will be empty itrm so the space will be empty but the length will be same
console.log(std.length);// so the length is not effected just an element os deleted and space is empty there 

// very important method widely used in javascript frameworks like react,express etc
let cstd=[1,2,3,4,5]
let cstd_more=[21,22,23,24]
let cstd_evenmore=[34,35,36,37]
let newarray=cstd.concat(cstd_more,cstd_evenmore)
console.log(newarray);
console.log(newarray.length);
