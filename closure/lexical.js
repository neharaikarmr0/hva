//how does js understand that outer var inside innerfunc() corresponds to var outer var of outerfunc()
//ans: lexical or static scope 
//lexical s means accessibility of var is determined by pos of var inside nested scopes
// inside inner scope, u can access var of outer scope

let a=0;
function ab(){
    let b=9;
    function bs(){
        let c=8;
        console.log(a,b,c); //0 9
        function bg(){
            d=7;
            console.log(a,b,c,d);  //0 9 8 7
        }
        bg();
    }
    bs();
}
ab();