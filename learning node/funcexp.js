//normal function

function abc(){
    console.log("hi");
}
abc();

//function expression

var func = function(){                 //anonymous function
    console.log("hello");
}
func();

//send function as a parameter to another function

function xyz(a){
    a();
}

xyz(func);