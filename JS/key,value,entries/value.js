let r = {
    8:6,
    9:5,
};

let e = Object.values(r); //6,5

const sum = e.reduce((sum,e)=>sum+e);
alert(sum);