let arr = ["n","o","i"];
for(let i=0;i<arr.length;i++){
    alert(arr[i]);
}

for(let i of arr){
    alert(arr);
}

for(let i in arr){       /*dont use for..in loop for arrays*/
    alert(arr[i]);
}
