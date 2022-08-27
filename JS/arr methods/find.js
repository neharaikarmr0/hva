let p = [
    {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
];

let fi = p.find(item=>item.id==1);
alert(fi.name); //John

alert(p.findIndex(item=>item.id==2));  //1

alert(p.findLastIndex(item=>item.id==1));  //3