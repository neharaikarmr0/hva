//arr.concat(arg1,arg2);

let e =[9,8];
alert(e.concat(9,[7,8]));  //9,8,9,7,8


let u = {
    a:9,
    b:8,
};
alert(e.concat(u)); //9,8,[object:object]

let y = {
    a:9,
    b:8,
    [Symbol.isConcatSpreadable]:true,
};
alert(e.concat(y));  //output wrong