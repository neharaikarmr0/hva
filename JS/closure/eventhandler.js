let countClicked=0;
myButton.addEventListener('click',function handleClick(){
    countClicked++;
    myText.innerText=`u clicked ${countClicked} times`;
});