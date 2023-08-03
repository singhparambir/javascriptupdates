let name="param"
console.log(name);
let sname='param'
console.log(sname);
// its a wrong way to have one double quote and one single quote
// let mistake="harry'
// console.log(mistake);


// template literals-modern javascript

let boy1="param"
let boy2="guri"
let sentence=`${boy1} and ${boy2 } are brothers`// this is known as string interpolation when variables are used inside string
console.log(sentence);

//escape sequence chracters
let fruits="bana\n'na"
let fruits2="bana\t'na"
let fruits3="bana\r'na"
console.log(fruits);
console.log(fruits2);
console.log(fruits3);

//string methods and manipulation
let puuranaam="parambir singh"
console.log(puuranaam.length);
console.log(puuranaam.toUpperCase());
console.log(puuranaam.toLowerCase());
console.log(puuranaam.slice(2,8));
console.log(puuranaam.replace("singh","sardaar"));

