let arr = [ 'apple', true, {name:'joe'}, function(){alert("hello")}];
alert(arr[2]);
alert(arr[2].name);
arr[3]();
alert(arr[arr.length-1]); /*last element*/
alert(arr.at(-1));