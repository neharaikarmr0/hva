const msg="hello";
setTimeout(function callback(){
    console.log(msg);
},1000);

//callback() is a closure bcz it remembers var 'msg'