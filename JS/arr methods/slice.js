//syntax: arr.slice([start],[end])

//It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

let r = [5,5,6,7,8];
alert(r.slice(1,4));  //5,6,7 - from idx 1 to idx 3(dont include end idx mentioned)

alert(r.slice(-2));   //7,8 - end idx is not given


//creates a copy of the array if start and end idx is not mentioned

let i = [9,8,9,5];
let e = i.slice();
alert(e);