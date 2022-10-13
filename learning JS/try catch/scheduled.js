//If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:
//That’s because the function itself is executed later, when the engine has already left the try...catch construct.

try{
    setTimeout(function(){
        Novar;
    },1000);
}
catch(e){
    alert("error");
}


//To catch an exception inside a scheduled function, try...catch must be inside that function:

setTimeout(function(){
    try{
        novari;
    }catch(e){
        alert("error");
    }
},1000);