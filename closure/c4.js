//different func can hav same variables as they will be in different scopes

function foo(){
    let c=0;
    alert(c);
}
function bar(){
    let c=0;
    alert(c);
}
foo();
bar();