//splice modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
// syntax : arr.splice(start[, deleteCount, elem1, ..., elemN])

let arr=[1,2,3,4];
arr.splice(1,2);   //from index 1 ,remove 2 elements
alert(arr);

let n=[0,9,8,7,6];
n.splice(0,3,4,5);   //from index 0 , remove 3 elements and insert 4,5
alert(n);  //7,6,4,5

let m=[0,9,8,7,6];
let removed = m.splice(0,2); 
alert(removed); //0,9

//insert elements without any removals
let t=[2,3,4,5,6];
t.splice(2,0,8,9); //from idx 2, delete 0 elements and insert 8,9
alert(t);

//negative index
let r=[0,7,6,5];
r.splice(-1,2);
alert(r);  //0,7

