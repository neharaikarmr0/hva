const items=[9,8,0,7];
let count=0;
items.forEach(function iterate(no){
    if(no%2==0){
        count++;
    }
    
});
alert(count);

//func iterate is a closure here