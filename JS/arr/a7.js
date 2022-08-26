//multidimensional arrays

let arr = [[1,2,3],[4,5,6],[5,7]];
alert(arr[1][2]);  //6


//toString - Arrays have their own implementation of toString method that returns a comma-separated list of elements.

let ar = [9,0,8];
alert(arr); //9,0,8
alert(String(arr)==='9,0,8');  //true

//toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2"

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"
