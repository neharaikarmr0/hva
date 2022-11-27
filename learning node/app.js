console.log("hello");
var time = 0;
var timer = setTimeout(function(){
    time+=2;
    console.log(time + "seconds passed");
    if(time>5){
        clearTimeout(timer);
    }
},2000);

var timer = setInterval(function(){
    time+=2;
    console.log(time + "seconds passed");
    if(time>5){
        clearInterval(timer);
    }
},2000);