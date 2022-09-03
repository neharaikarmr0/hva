//closure is a func tht accesses its lexical scope even executed outside of its lexical scope
//it is a func tht remembers var frm whereit is defined ,regardless of wer it is executed earlier

function outer(){      //lexical scope
    let out="i am out";
    function inner(){      //closure
        console.log(out);   //i am out
    }
    return inner();
}
function exec(){
    const innerfunc=outer();
    innerfunc();
}
exec();