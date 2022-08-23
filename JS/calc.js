let n1=parseInt(prompt("Operand 1:"));
let n2=parseInt(prompt("Operand 2:"));
let op=prompt("Operator:");
if(op=='+')
{
    alert(n1+n2);
}
if(op=='-')
{
    alert(n1-n2);
}
if(op=='*')
{
    alert(n1*n2);
}
if(op=='/')
{
    alert(n1/n2);
}
if(op=='%')
{
    alert(n1%n2);
}
else{
    alert("Invalid operation");
}
