//arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
//arr.includes(item, from) – looks for item starting from index from, returns true if found.
//indexOf follows strict equality ===. if 'false' must me found, it searches only 'false' not 0

let p=[8,7,6,4];
alert(p.indexOf(8,2));  //(-1)
alert(p.indexOf(7));  //1


alert(p.includes(6,2));  //true
alert(p.includes(8));  //true 

alert(p.lastIndexOf(6)); //2  //searches from last index

const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)