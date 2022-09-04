//var of outer scope r accessible inside inner scope


function out(){
    let outvar="hi i am out";
    function inside(){
        console.log(outvar);   //hi i am out
    }
    inside();
}
out();